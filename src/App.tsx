import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Sparkles, 
  Check, 
  ChevronDown, 
  Clock, 
  Plus, 
  Zap, 
  Trash2, 
  Download, 
  Info,
  Smartphone,
  Copy,
  CheckCheck
} from 'lucide-react';
import { WORKOUT_DAYS } from './data';
import { generateSingleFileHtml } from './htmlTemplate';

export default function App() {
  const [currentDay, setCurrentDay] = useState<string>('seg');
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const [charges, setCharges] = useState<Record<string, string>>({});
  const [completedSeries, setCompletedSeries] = useState<Record<string, boolean[]>>({});
  
  // Theme Toggle State
  const [theme, setTheme] = useState<'amber' | 'pink'>(() => {
    return (localStorage.getItem('glowfit_theme') as 'amber' | 'pink') || 'amber';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'amber' ? 'pink' : 'amber';
    setTheme(newTheme);
    localStorage.setItem('glowfit_theme', newTheme);
  };

  const c = (cls: string) => {
    if (theme === 'pink') {
      return cls
        .replace(/amber-/g, 'pink-')
        .replace(/rgba\(245,158,11/g, 'rgba(236,72,153')
        .replace(/selection:bg-amber-500/g, 'selection:bg-pink-500')
        .replace(/shadow-amber-500/g, 'shadow-pink-500')
        .replace(/text-amber-500/g, 'text-pink-500')
        .replace(/bg-amber-500/g, 'bg-pink-500')
        .replace(/border-amber-500/g, 'border-pink-500')
        .replace(/border-amber-400/g, 'border-pink-400')
        .replace(/from-amber-500/g, 'from-pink-500');
    }
    return cls;
  };

  // Timer States
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [timerLeft, setTimerLeft] = useState<number>(60);
  const [timerTotal, setTimerTotal] = useState<number>(60);
  const [timerEndTime, setTimerEndTime] = useState<number | null>(null);

  // Cardio Modality States (storing 'esteira', 'escada', 'bike', 'corda' per exercise id)
  const [cardioModalities, setCardioModalities] = useState<Record<string, string>>({});

  // Single HTML Export Modal State
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Load from localStorage
  useEffect(() => {
    const savedCharges = localStorage.getItem('glowfit_charges');
    const savedSeries = localStorage.getItem('glowfit_series');
    if (savedCharges) {
      try {
        setCharges(JSON.parse(savedCharges));
      } catch (e) {
        console.error('Error parsing charges from localStorage', e);
      }
    }
    if (savedSeries) {
      try {
        setCompletedSeries(JSON.parse(savedSeries));
      } catch (e) {
        console.error('Error parsing series from localStorage', e);
      }
    }
    const savedCardioModalities = localStorage.getItem('glowfit_cardio_modalities');
    if (savedCardioModalities) {
      try {
        setCardioModalities(JSON.parse(savedCardioModalities));
      } catch (e) {
        console.error('Error parsing cardio modalities from localStorage', e);
      }
    }

    // Restore active background timer if any
    const savedEndTimeStr = localStorage.getItem('glowfit_timer_endtime');
    const savedTotalStr = localStorage.getItem('glowfit_timer_total');
    if (savedEndTimeStr && savedTotalStr) {
      const savedEndTime = parseInt(savedEndTimeStr, 10);
      const savedTotal = parseInt(savedTotalStr, 10);
      const now = Date.now();
      if (savedEndTime > now) {
        const remaining = Math.round((savedEndTime - now) / 1000);
        setTimerTotal(savedTotal);
        setTimerLeft(remaining);
        setTimerEndTime(savedEndTime);
        setTimerActive(true);
      } else {
        localStorage.removeItem('glowfit_timer_endtime');
        localStorage.removeItem('glowfit_timer_total');
      }
    }
  }, []);

  // Web Audio API beep
  const playBeep = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
      gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);

      // Smooth fade-out to prevent popping artifacts
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + 0.3);
    } catch (err) {
      console.log('Audio Context feedback blocked or unsupported.', err);
    }
  };

  // Rest Timer countdown hook using absolute timestamps to support background running
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timerEndTime !== null) {
      interval = setInterval(() => {
        const now = Date.now();
        const remaining = Math.max(0, Math.round((timerEndTime - now) / 1000));
        
        if (remaining <= 0) {
          playBeep();
          setTimerLeft(0);
          setTimerActive(false);
          setTimerEndTime(null);
          localStorage.removeItem('glowfit_timer_endtime');
          localStorage.removeItem('glowfit_timer_total');
        } else {
          setTimerLeft(remaining);
        }
      }, 200);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timerEndTime]);

  // Find active workout
  const activeWorkout = WORKOUT_DAYS.find(d => d.day === currentDay) || WORKOUT_DAYS[0];

  // Save changes to state + localStorage
  const saveCharges = (newCharges: Record<string, string>) => {
    setCharges(newCharges);
    localStorage.setItem('glowfit_charges', JSON.stringify(newCharges));
  };

  const saveSeries = (newSeries: Record<string, boolean[]>) => {
    setCompletedSeries(newSeries);
    localStorage.setItem('glowfit_series', JSON.stringify(newSeries));
  };

  const handleCardioModalityChange = (exerciseId: string, value: string) => {
    const updated = {
      ...cardioModalities,
      [exerciseId]: value
    };
    setCardioModalities(updated);
    localStorage.setItem('glowfit_cardio_modalities', JSON.stringify(updated));
  };

  const getCardioModalityLabel = (modId: string) => {
    switch (modId) {
      case 'esteira': return 'Esteira 🏃‍♀️';
      case 'escada': return 'Escada 🧗‍♀️';
      case 'bike': return 'Bicicleta 🚴‍♀️';
      case 'corda': return 'Corda 🪢';
      default: return 'Esteira 🏃‍♀️';
    }
  };

  // Change weight (carga)
  const handleChargeChange = (exerciseId: string, value: string) => {
    const updated = {
      ...charges,
      [exerciseId]: value
    };
    saveCharges(updated);
  };

  // Toggle specific series completed checkbox
  const handleToggleSeries = (exerciseId: string, seriesIndex: number, totalSeries: number) => {
    const currentSeriesState = completedSeries[exerciseId] || Array(totalSeries).fill(false);
    const nextState = [...currentSeriesState];
    nextState[seriesIndex] = !nextState[seriesIndex];

    const updated = {
      ...completedSeries,
      [exerciseId]: nextState
    };
    saveSeries(updated);

    // If it becomes completed (true), trigger the rest timer
    if (nextState[seriesIndex]) {
      triggerRestTimer(60);
    }
  };

  const triggerRestTimer = (seconds: number) => {
    const endTime = Date.now() + seconds * 1000;
    setTimerTotal(seconds);
    setTimerLeft(seconds);
    setTimerEndTime(endTime);
    setTimerActive(true);
    localStorage.setItem('glowfit_timer_endtime', endTime.toString());
    localStorage.setItem('glowfit_timer_total', seconds.toString());
  };

  const handleAdd30s = () => {
    if (timerEndTime !== null) {
      const newEndTime = timerEndTime + 30000;
      const newTotal = timerTotal + 30;
      setTimerEndTime(newEndTime);
      setTimerLeft(prev => prev + 30);
      setTimerTotal(newTotal);
      localStorage.setItem('glowfit_timer_endtime', newEndTime.toString());
      localStorage.setItem('glowfit_timer_total', newTotal.toString());
    } else {
      triggerRestTimer(30);
    }
  };

  const handleSkipTimer = () => {
    setTimerActive(false);
    setTimerLeft(0);
    setTimerEndTime(null);
    localStorage.removeItem('glowfit_timer_endtime');
    localStorage.removeItem('glowfit_timer_total');
  };

  // Calculate workout completion progress for current day
  const getWorkoutStats = () => {
    let totalSeriesCount = 0;
    let completedSeriesCount = 0;

    activeWorkout.exercises.forEach(ex => {
      if (ex.type === 'mobility' || ex.type === 'cardio') {
        totalSeriesCount += 1;
        const state = completedSeries[ex.id] || [false];
        if (state[0]) completedSeriesCount += 1;
      } else {
        totalSeriesCount += ex.series;
        const state = completedSeries[ex.id] || Array(ex.series).fill(false);
        completedSeriesCount += state.filter(Boolean).length;
      }
    });

    const percent = totalSeriesCount === 0 ? 0 : Math.round((completedSeriesCount / totalSeriesCount) * 100);
    return {
      total: totalSeriesCount,
      completed: completedSeriesCount,
      percent
    };
  };

  const { total: totalSeriesCount, completed: completedSeriesCount, percent: progress } = getWorkoutStats();

  // Export & Download Single HTML File
  const handleDownloadHtml = () => {
    const htmlContent = generateSingleFileHtml(theme);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ficha_treino_premium.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyHtml = () => {
    const htmlContent = generateSingleFileHtml(theme);
    navigator.clipboard.writeText(htmlContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={c("min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans")}>
      
      {/* Visual background gradient accents */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={c("absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-amber-500/5 blur-[120px]")}></div>
        <div className={c("absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-amber-500/3 blur-[120px]")}></div>
      </div>

      <div className="w-full max-w-md mx-auto px-4 py-6 flex-1 flex flex-col z-10">
        
        {/* Header App with JD-style Initials */}
        <header className="mb-6 flex flex-col gap-1">
          <div className="flex items-center justify-between bg-slate-900/50 backdrop-blur-md rounded-2xl p-3 border border-slate-800">
            <div className="flex items-center gap-2">
              <div className={c("p-2 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-500")}>
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <span className={c("text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold")}>Performance App</span>
                <h1 className="text-xl font-bold tracking-tight text-white">Ficha de Treino</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Selector Button */}
              <button
                onClick={toggleTheme}
                id="theme-toggle-btn"
                className={c("p-2 rounded-xl border bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20 active:scale-95 transition-all flex items-center justify-center cursor-pointer")}
                title={theme === 'pink' ? 'Mudar para Modo Amber' : 'Mudar para Mundo Rosa'}
              >
                <Sparkles className="w-4 h-4 animate-pulse" />
              </button>

              <div className="w-9 h-9 rounded-full border-2 border-slate-700 flex items-center justify-center overflow-hidden bg-slate-800" title="brenoadf1@gmail.com">
                <div className={c("text-amber-500 font-bold text-xs")}>RAY</div>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-xs mt-2 px-1">
            Seu guia mobile-first definitivo com cronômetro de descanso e controle de carga.
          </p>
        </header>

        {/* Elegant Navigation Tabs matching Design style */}
        <nav className="w-full flex p-1 bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-800 mb-6 sticky top-2 z-30 shadow-2xl">
          {WORKOUT_DAYS.map(d => {
            const isActive = currentDay === d.day;
            return (
              <button
                key={d.day}
                id={`tab-${d.day}`}
                onClick={() => {
                  setCurrentDay(d.day);
                  setExpandedExercise(null);
                }}
                className={c(`relative flex-1 py-2 px-1 text-center rounded-full transition-all duration-300 cursor-pointer select-none outline-none focus:outline-none ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 z-10'
                    : 'text-slate-400 hover:text-slate-200 bg-transparent'
                }`)}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className={`text-xs md:text-sm font-bold leading-tight ${isActive ? 'text-slate-950' : 'text-slate-200'}`}>
                    {d.label}
                  </span>
                  <span className={`text-[9px] font-mono mt-0.5 leading-none tracking-tight ${isActive ? 'text-slate-950/70' : 'text-slate-500'}`}>
                    {d.focus}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Work progress header panel matching Design aesthetic */}
        <section className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 mb-6 shadow-md">
          <div className="flex justify-between items-center mb-2.5">
            <div className="flex flex-col">
              <span className={c("text-[10px] font-bold text-amber-500 uppercase tracking-widest")}>Progresso do Dia</span>
              <h2 className="text-sm font-bold text-slate-100">{activeWorkout.focus} • {progress}% concluído</h2>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400">{completedSeriesCount}/{totalSeriesCount} séries</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-900">
            <motion.div 
              className={c("bg-amber-500 h-full")}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </section>

        {/* Exercises list - accordions matching Design aesthetic */}
        <section className="space-y-4 flex-1">
          <AnimatePresence mode="popLayout">
            {activeWorkout.exercises.map((ex, idx) => {
              const isExpanded = expandedExercise === ex.id;
              const hasCarga = charges[ex.id] && charges[ex.id].trim() !== '';
              const exSeries = completedSeries[ex.id] || Array(ex.series || 1).fill(false);
              
              const isCompleted = ex.type === 'mobility' || ex.type === 'cardio'
                ? exSeries[0]
                : exSeries.length > 0 && exSeries.every(Boolean);

              return (
                <motion.div
                  key={ex.id}
                  id={`exercise-card-${ex.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  className={c(`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-slate-800 border-2 border-amber-500/50 shadow-lg shadow-amber-500/10' 
                      : isCompleted
                      ? 'bg-slate-800/40 border border-slate-700/60 opacity-60'
                      : 'bg-slate-850/70 border border-slate-750/80 hover:border-slate-700/80'
                  }`)}
                >
                  {/* Card Main Bar (Accordion header) */}
                  <div
                    onClick={() => setExpandedExercise(isExpanded ? null : ex.id)}
                    className="p-4 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex-1 pr-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={c(`text-[9px] font-bold uppercase tracking-wider ${
                          ex.type === 'mobility'
                            ? 'text-indigo-400'
                            : ex.type === 'cardio'
                            ? 'text-emerald-400'
                            : 'text-amber-500'
                        }`)}>
                          {ex.type === 'mobility' ? 'Mobilidade' : ex.type === 'cardio' ? 'Cardio' : `${ex.series} × ${ex.reps}`}
                        </span>
                        {isCompleted && (
                          <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                            <Check className="w-2.5 h-2.5" />
                            <span>Feito</span>
                          </span>
                        )}
                      </div>
                      
                      <h3 className={`font-bold text-base leading-tight tracking-tight ${
                        isCompleted ? 'text-slate-500 line-through' : 'text-slate-100'
                      }`}>
                        {ex.name}
                      </h3>
                      
                      {/* Weight or Cardio references when closed */}
                      {ex.type === 'cardio' ? (
                        !isExpanded && (
                          <div className={c("mt-1 text-xs text-emerald-400 font-mono font-bold flex items-center gap-1.5")}>
                            <span>⏱️ {charges[ex.id] || ex.reps.replace(' min', '')} min • {getCardioModalityLabel(cardioModalities[ex.id] || 'esteira')}</span>
                          </div>
                        )
                      ) : (
                        hasCarga && !isExpanded && (
                          <div className={c("mt-1 text-xs text-amber-500 font-mono font-bold flex items-center gap-1")}>
                            <span>🏋️ {charges[ex.id]} kg</span>
                          </div>
                        )
                      )}
                    </div>

                    <div className="text-slate-500 p-1">
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={isExpanded ? c('text-amber-500') : 'text-slate-400'}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Accordion Body */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="px-4 pb-5 bg-slate-900/30 space-y-4 overflow-hidden border-t border-slate-700/50 pt-4"
                    >
                      {/* Tip box */}
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        <strong className={c("text-amber-500 font-bold")}>Dica: </strong>
                        {ex.tip}
                      </p>

                      {/* Series checking & weight/cardio inputs */}
                      <div className="flex flex-col space-y-3">
                        {/* Cardio Modality Selector */}
                        {ex.type === 'cardio' && (
                          <div className="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800 flex flex-col space-y-1.5">
                            <label className="text-[9px] uppercase text-slate-500 font-bold tracking-wider">Tipo de Cardio</label>
                            <div className="grid grid-cols-2 gap-1.5">
                              {[
                                { id: 'esteira', label: 'Esteira 🏃‍♀️' },
                                { id: 'escada', label: 'Escada 🧗‍♀️' },
                                { id: 'bike', label: 'Bicicleta 🚴‍♀️' },
                                { id: 'corda', label: 'Corda 🪢' }
                              ].map(opt => {
                                const isSelected = (cardioModalities[ex.id] || 'esteira') === opt.id;
                                return (
                                  <button
                                    key={opt.id}
                                    onClick={() => handleCardioModalityChange(ex.id, opt.id)}
                                    className={c(`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center ${
                                      isSelected 
                                        ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-sm' 
                                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                                    }`)}
                                  >
                                    {opt.label}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center space-x-3">
                          {/* Carga Weight or Cardio Duration input box */}
                          <div className="flex-1 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col">
                            <label className="text-[9px] uppercase text-slate-500 font-bold">
                              {ex.type === 'cardio' ? 'Tempo (min)' : 'Carga (kg)'}
                            </label>
                            <input 
                              type="text" 
                              inputMode="decimal"
                              placeholder={ex.type === 'cardio' ? ex.reps.replace(' min', '') : '--'} 
                              value={charges[ex.id] || ''} 
                              onChange={(e) => handleChargeChange(ex.id, e.target.value)}
                              className="bg-transparent text-sm font-bold text-white focus:outline-none w-full placeholder-slate-700"
                            />
                          </div>

                          {/* Checklist circles counter for series */}
                          <div className="flex space-x-1.5 items-center">
                            {ex.type === 'mobility' || ex.type === 'cardio' ? (
                              <button
                                onClick={() => handleToggleSeries(ex.id, 0, 1)}
                                className={c(`px-4 py-2 rounded-full text-[11px] font-bold border transition-all duration-300 cursor-pointer uppercase ${
                                  exSeries[0]
                                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                                    : 'border-slate-600 text-slate-400 bg-transparent'
                                }`)}
                              >
                                {exSeries[0] ? '✓ Feito' : 'Concluir'}
                              </button>
                            ) : (
                              <div className="flex space-x-1.5">
                                {Array.from({ length: ex.series }).map((_, sIdx) => {
                                  const isChecked = exSeries[sIdx] || false;
                                  return (
                                    <button
                                      key={sIdx}
                                      onClick={() => handleToggleSeries(ex.id, sIdx, ex.series)}
                                      className={c(`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 cursor-pointer ${
                                        isChecked
                                          ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                                          : 'border-slate-650 text-slate-500 bg-transparent hover:border-slate-500'
                                      }`)}
                                    >
                                      {sIdx + 1}
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </section>

        {/* Action clear logs footer option */}
        <footer className="mt-12 text-center pb-12">
          <p className="text-xs text-slate-600 font-mono">Allenamento Rayssa • Desenvolvido com React</p>
          <button 
            onClick={() => {
              if (confirm("Deseja realmente limpar todo o histórico de cargas e progresso?")) {
                localStorage.removeItem('glowfit_charges');
                localStorage.removeItem('glowfit_series');
                setCharges({});
                setCompletedSeries({});
              }
            }}
            className={c("text-[10px] font-mono text-slate-600 hover:text-amber-500 underline mt-2 transition-colors cursor-pointer")}
          >
            Limpar histórico do LocalStorage
          </button>
        </footer>

      </div>

      {/* Intelligent Bottom Floating Rest Timer matching exact Design Specs */}
      <AnimatePresence>
        {timerActive && (
          <motion.div 
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className={c("fixed bottom-8 left-4 right-4 max-w-sm mx-auto bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden p-4 flex flex-col space-y-3 z-20")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={c("w-10 h-10 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-500")}>
                  <Clock className={c("w-5 h-5 text-amber-500 animate-pulse")} />
                </div>
                <div>
                  <p className={c("text-[10px] uppercase font-black text-amber-500")}>Tempo de Descanso</p>
                  <p className="text-xl font-mono font-bold text-white">
                    00:{(timerLeft).toString().padStart(2, '0')}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <button 
                  onClick={handleAdd30s}
                  className="bg-slate-800 text-slate-100 px-3 py-2 rounded-lg text-xs font-bold border border-slate-700 hover:bg-slate-700 active:scale-95 transition-all cursor-pointer"
                >
                  +30s
                </button>
                <button 
                  onClick={handleSkipTimer}
                  className={c("bg-amber-500 text-slate-950 px-3 py-2 rounded-lg text-xs font-black uppercase hover:bg-amber-400 active:scale-95 transition-all cursor-pointer")}
                >
                  Pular
                </button>
              </div>
            </div>

            {/* Decreasing progress bar with custom amber glow */}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className={c("h-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)] transition-all duration-1000")}
                style={{ width: `${(timerLeft / timerTotal) * 100}%` }}
              ></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export / Single HTML code Modal Overlay */}
      <AnimatePresence>
        {showExportModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-md w-full shadow-2xl relative overflow-hidden"
            >
              <div className={c("absolute top-[-40px] right-[-40px] w-24 h-24 bg-amber-500/10 rounded-full blur-xl")}></div>
              
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className={c("w-5 h-5 text-amber-500")} />
                <h2 className="text-xl font-bold text-white tracking-tight">App em Arquivo Único (HTML)</h2>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Baixe o aplicativo completo em um único arquivo autônomo. Ele contém todo o React, Tailwind CSS e a lógica offline para abrir diretamente no seu celular ou navegador sem precisar de servidores!
              </p>

              <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-400">
                  <span className={c("text-amber-500 font-bold font-mono")}>1.</span>
                  <span><strong>Download direto:</strong> Clique em "Baixar Arquivo" para fazer o download do arquivo HTML.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-400">
                  <span className={c("text-amber-500 font-bold font-mono")}>2.</span>
                  <span><strong>Uso offline:</strong> Abra o arquivo em qualquer celular para usar sua ficha de treinos premium onde quiser.</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  onClick={handleDownloadHtml}
                  className={c("w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98] cursor-pointer")}
                >
                  <Download className="w-4 h-4 text-slate-950" />
                  <span>Baixar Arquivo HTML</span>
                </button>
                
                <button 
                  onClick={handleCopyHtml}
                  className="w-full bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98] cursor-pointer text-xs font-mono"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Código Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar código completo HTML</span>
                    </>
                  )}
                </button>

                <button 
                  onClick={() => setShowExportModal(false)}
                  className="w-full text-slate-500 hover:text-slate-300 py-2 text-xs font-medium mt-1 cursor-pointer transition-colors"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
