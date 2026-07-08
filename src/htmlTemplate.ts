export function generateSingleFileHtml(initialTheme: 'amber' | 'pink' = 'amber'): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4gIDwhLS0gQmFja2dyb3VuZCBjaXJjbGUgd2l0aCBhbWJlciBib3JkZXIgLS0+ICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0OCIgZmlsbD0iIzBmMTcyYSIgc3Ryb2tlPSIjZjU5ZTBiIiBzdHJva2Utd2lkdGg9IjMiIC8+ICAgIDwhLS0gQ3VybHkgaGFpciBiYWNrZ3JvdW5kIGxheWVyIC0tPiAgPGNpcmNsZSBjeD0iMzQiIGN5PSIzNSIgcj0iMTQiIGZpbGw9IiMxZTFiNGIiIC8+ICA8Y2lyY2xlIGN4PSI2NiIgY3k9IjMyIiByPSIxNCIgZmlsbD0iIzFlMWI0YiIgLz4gIDxjaXJjbGUgY3g9IjMwIiBjeT0iNDgiIHI9IjEyIiBmaWxsPSIjMWUxYjRiIiAvPiAgPGNpcmNsZSBjeD0iNzAiIGN5PSI0OCIgcj0iMTIiIGZpbGw9IiMxZTFiNGIiIC8+ICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjYyIiByPSIxMSIgZmlsbD0iIzFlMWI0YiIgLz4gIDxjaXJjbGUgY3g9IjY4IiBjeT0iNjIiIHI9IjExIiBmaWxsPSIjMWUxYjRiIiAvPiAgPGNpcmNsZSBjeD0iMzYiIGN5PSI3NCIgcj0iOSIgZmlsbD0iIzFlMWI0YiIgLz4gIDxjaXJjbGUgY3g9IjY0IiBjeT0iNzQiIHI9IjkiIGZpbGw9IiMxZTFiNGIiIC8+ICA8IS0tIFNob3VsZGVycyAvIEJsdWUgVG9wIC0tPiAgPHBhdGggZD0iTSAyNSA4NSBDIDI1IDcyLCAzNSA2OCwgNTAgNjggQyA2NSA2OCwgNzUgNzIsIDc1IDg1IFoiIGZpbGw9IiMwMjg0YzciIC8+ICA8IS0tIFNpbHZlciBOZWNrbGFjZSAtLT4gIDxwYXRoIGQ9Ik0gNDIgNjYgQyA0NSA3MiwgNTUgNzIsIDU4IDY2IiBmaWxsPSJub25lIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+ICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjcwIiByPSIxLjUiIGZpbGw9IiNlMmU4ZjAiIC8+ICA8IS0tIE5lY2sgLS0+ICA8cGF0aCBkPSJNIDQyIDU1IEwgNDIgNjYgQyA0MiA2NiwgNDUgNzAsIDUwIDcwIEMgNTUgNzAsIDU4IDY2LCA1OCA2NiBMIDU4IDU1IFoiIGZpbGw9IiNlOGEyN2QiIC8+ICA8IS0tIEhlYWQvRmFjZSAtLT4gIDxlbGxpcHNlIGN4PSI1MCIgY3k9IjQ0IiByeD0iMTYiIHJ5PSIxOSIgZmlsbD0iI2Y1Yjg5NSIgLz4gIDwhLS0gRnJvbnQgQ3VybHkgSGFpciBMb2NrcyBmcmFtaW5nIGZhY2UgLS0+ICA8Y2lyY2xlIGN4PSIzNiIgY3k9IjMyIiByPSI3IiBmaWxsPSIjMGYxNzJhIiAvPiAgPGNpcmNsZSBjeD0iNjQiIGN5PSIzMiIgcj0iNyIgZmlsbD0iIzBmMTcyYSIgLz4gIDxjaXJjbGUgY3g9IjM0IiBjeT0iNDIiIHI9IjYiIGZpbGw9IiMwZjE3MmEiIC8+ICA8Y2lyY2xlIGN4PSI2NiIgY3k9IjQyIiByPSI2IiBmaWxsPSIjMGYxNzJhIiAvPiAgPGNpcmNsZSBjeD0iMzUiIGN5PSI1MiIgcj0iNSIgZmlsbD0iIzBmMTcyYSIgLz4gIDxjaXJjbGUgY3g9IjY1IiBjeT0iNTIiIHI9IjUiIGZpbGw9IiMwZjE3MmEiIC8+ICAgIDwhLS0gSGFpciB0b3AgLS0+ICA8cGF0aCBkPSJNIDM0IDMyIEMgMzQgMjAsIDY2IDIwLCA2NiAzMiBaIiBmaWxsPSIjMWUxYjRiIiAvPiAgPGNpcmNsZSBjeD0iNDIiIGN5PSIyNCIgcj0iNiIgZmlsbD0iIzBmMTcyYSIgLz4gIDxjaXJjbGUgY3g9IjUwIiBjeT0iMjMiIHI9IjYiIGZpbGw9IiMwZjE3MmEiIC8+ICA8Y2lyY2xlIGN4PSI1OCIgY3k9IjI0IiByPSI2IiBmaWxsPSIjMGYxNzJhIiAvPiAgPCEtLSBFeWVzIC0tPiAgPGVsbGlwc2UgY3g9IjQ0IiBjeT0iNDEiIHJ4PSIyIiByeT0iMS41IiBmaWxsPSIjMWUxYjRiIiAvPiAgPGVsbGlwc2UgY3g9IjU2IiBjeT0iNDEiIHJ4PSIyIiByeT0iMS41IiBmaWxsPSIjMWUxYjRiIiAvPiAgICA8IS0tIEV5ZWJyb3dzIChDdXJ2ZWQpIC0tPiAgPHBhdGggZD0iTSAzOSAzNyBDIDQxIDM2LCA0NiAzNywgNDcgMzkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmMTcyYSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4gIDxwYXRoIGQ9Ik0gNjEgMzcgQyA1OSAzNiwgNTQgMzcsIDUzIDM5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwZjE3MmEiIHN0cm9rZT0iIzBmMTcyYSIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4gIDwhLS0gTm9zZSAtLT4gIDxwYXRoIGQ9Ik0gNDkgNDMgQyA0OSA0NiwgNTEgNDYsIDUxIDQzIiBmaWxsPSJub25lIiBzdHJva2U9IiNlOGEyN2QiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIC8+ICA8IS0tIEhhcHB5IFNtaWxlIHdpdGggd2hpdGUgdGVldGghIC0tPiAgPCEtLSBPdXRlciBtb3V0aCBvdXRsaW5lIC0tPiAgPHBhdGggZD0iTSA0MiA0NyBDIDQyIDU0LCA1OCA1NCwgNTggNDcgWiIgZmlsbD0iIzk5MWIxYiIgLz4gIDwhLS0gV2hpdGUgdGVldGggLS0+ICA8cGF0aCBkPSJNIDQzIDQ3LjUgQyA0NSA1MCwgNTUgNTAsIDU3IDQ3LjUgWiIgZmlsbD0iI2ZmZmZmZiIgLz48L3N2Zz4=" />
  <title>Allenamento Rayssa</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          }
        }
      }
    }
  </script>

  <!-- React and Babel CDN -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #020617; /* bg-slate-950 */
      color: #f8fafc; /* text-slate-50 */
      -webkit-tap-highlight-color: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #0f172a;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #f59e0b;
      border-radius: 2px;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-50 min-h-screen pb-32">

  <div id="root"></div>

  <!-- React Script Compiled by Babel -->
  <script type="text/babel">
    const { useState, useEffect, useRef } = React;

    const WORKOUT_DAYS = [
      {
        day: 'seg',
        label: 'Seg',
        focus: 'Quadríceps',
        exercises: [
          {
            id: 'seg_mobility',
            name: 'Mobilidade & Pré-ativação',
            series: 0,
            reps: 'N/A',
            tip: '5-10 min de soltura articular e ativação de core.',
            type: 'mobility',
            imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'seg_extensora_aq',
            name: 'Cadeira Extensora (Aquecimento)',
            series: 2,
            reps: '15 reps',
            tip: 'Carga leve para lubrificar as articulações do joelho.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'seg_smith_agachamento',
            name: 'Agachamento Smith',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Pés ligeiramente à frente, descida controlada quebrando os 90°.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'seg_smith_afundo',
            name: 'Afundo Smith',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Foco na pressão no calcanhar da perna da frente.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'seg_leg_press',
            name: 'Leg Press 45°',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Lombar totalmente apoiada no banco. Não estenda totalmente os joelhos no topo.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'seg_extensora_principal',
            name: 'Cadeira Extensora',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Segure firme nos apoios laterais para isolar o quadríceps.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'seg_cardio',
            name: 'Cardio',
            series: 1,
            reps: '20-30 min',
            tip: '20-30 min pós-treino em intensidade moderada.',
            type: 'cardio',
            imageUrl: 'https://images.unsplash.com/photo-1538797869764-10300f53d5a5?w=500&auto=format&fit=crop&q=80'
          }
        ]
      },
      {
        day: 'ter',
        label: 'Ter',
        focus: 'Bíceps & Ombro',
        exercises: [
          {
            id: 'ter_elevacao_lateral',
            name: 'Elevação Lateral',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Suba os braços até a linha dos ombros, cotovelos levemente flexionados.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'ter_rosca_martelo',
            name: 'Rosca Martelo',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Pegada neutra. Excelente para trabalhar o braquiorradial.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'ter_desenvolvimento',
            name: 'Desenvolvimento',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Feito com halteres ou na máquina, desça até a linha das orelhas.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'ter_rosca_inclinada',
            name: 'Rosca Inclinada',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Banco a 45°, braços estendidos atrás da linha do tronco para maior alongamento.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'ter_biceps_corda',
            name: 'Bíceps na Corda',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Feito na polia baixa, controle a fase excêntrica (descida).',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'ter_elevacao_frontal',
            name: 'Elevação Frontal',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Suba os halteres controladamente até a altura dos olhos.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'ter_cardio',
            name: 'Cardio',
            series: 1,
            reps: 'Moderado',
            tip: 'Cardio pós-treino com intensidade moderada.',
            type: 'cardio',
            imageUrl: 'https://images.unsplash.com/photo-1538797869764-10300f53d5a5?w=500&auto=format&fit=crop&q=80'
          }
        ]
      },
      {
        day: 'qui',
        label: 'Qui',
        focus: 'Glúteos',
        exercises: [
          {
            id: 'qui_mobilidade',
            name: 'Mobilidade & Pré-ativação',
            series: 0,
            reps: 'N/A',
            tip: 'Foco em mobilidade de quadril e ativação de glúteo médio com elástico.',
            type: 'mobility',
            imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'qui_abdutora',
            name: 'Cadeira Abdutora',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Tronco inclinado levemente para a frente para isolar mais o glúteo.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'qui_bulgaro',
            name: 'Búlgaro',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Tronco levemente inclinado à frente transfere mais a carga para o glúteo.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'qui_elevacao_pelvica',
            name: 'Elevação Pélvica',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Esmague o glúteo por 1-2 segundos no topo do movimento.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'qui_stiff_unilateral',
            name: 'Stiff Unilateral',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Use um halter na mão oposta à perna de apoio para melhor equilíbrio.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'qui_coice_cruzado',
            name: 'Coice Cruzado',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Na polia baixa, chute estendendo a perna levemente para trás e para fora.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'qui_cardio',
            name: 'Cardio',
            series: 1,
            reps: 'Moderado',
            tip: 'Cardio em intensidade moderada para complementar.',
            type: 'cardio',
            imageUrl: 'https://images.unsplash.com/photo-1538797869764-10300f53d5a5?w=500&auto=format&fit=crop&q=80'
          }
        ]
      },
      {
        day: 'sex',
        label: 'Sex',
        focus: 'Costas & Tríceps',
        exercises: [
          {
            id: 'sex_puxada_aberta',
            name: 'Puxada Aberta',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Puxe a barra em direção ao peitoral superior, ativando as dorsais.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'sex_puxada_triangulo',
            name: 'Puxada Triângulo',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Puxe fechado focando na contração do miolo das costas.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'sex_remada_baixa',
            name: 'Remada Baixa',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Use o cabo, puxe em direção ao umbigo projetando o peito para fora.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'sex_remada_unilateral',
            name: 'Remada Unilateral',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Movimento de serrote levando o halter em direção ao quadril.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'sex_triceps_corda',
            name: 'Tríceps Corda',
            series: 4,
            reps: '8 a 12 reps',
            tip: 'Abra a corda embaixo para maximizar a contração da cabeça lateral do tríceps.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'sex_triceps_testa',
            name: 'Tríceps Testa',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Mantenha os cotovelos apontados para o teto e paralelos durante o movimento.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'sex_triceps_frances',
            name: 'Tríceps Francês Unilateral',
            series: 3,
            reps: '8 a 12 reps',
            tip: 'Segure o braço com a mão oposta para estabilizar o cotovelo.',
            type: 'strength',
            imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=500&auto=format&fit=crop&q=80'
          },
          {
            id: 'sex_cardio',
            name: 'Cardio',
            series: 1,
            reps: 'N/A',
            tip: 'Conclusão do ciclo da semana.',
            type: 'cardio',
            imageUrl: 'https://images.unsplash.com/photo-1538797869764-10300f53d5a5?w=500&auto=format&fit=crop&q=80'
          }
        ]
      }
    ];

    function App() {
      const [currentDay, setCurrentDay] = useState('seg');
      const [expandedExercise, setExpandedExercise] = useState(null);
      const [charges, setCharges] = useState({});
      const [completedSeries, setCompletedSeries] = useState({});
      const [cardioModalities, setCardioModalities] = useState({});
      const [showTaPagoModal, setShowTaPagoModal] = useState(false);
      const [lastCompletedWorkoutDay, setLastCompletedWorkoutDay] = useState(
        localStorage.getItem('glowfit_last_completed_day') || ''
      );
      const [isResetConfirming, setIsResetConfirming] = useState(false);

      const handleResetAllWorkouts = () => {
        if (!isResetConfirming) {
          setIsResetConfirming(true);
          setTimeout(() => setIsResetConfirming(false), 4000);
          return;
        }
        setCompletedSeries({});
        setCharges({});
        setLastCompletedWorkoutDay('');
        setShowTaPagoModal(false);
        localStorage.removeItem('glowfit_series');
        localStorage.removeItem('glowfit_charges');
        localStorage.removeItem('glowfit_last_completed_day');
        setIsResetConfirming(false);
      };
      
      // Theme State & Toggle
      const [theme, setTheme] = useState(localStorage.getItem('glowfit_theme') || '${initialTheme}');

      const toggleTheme = () => {
        const newTheme = theme === 'amber' ? 'pink' : 'amber';
        setTheme(newTheme);
        localStorage.setItem('glowfit_theme', newTheme);
      };

      const c = (cls) => {
        if (theme === 'pink') {
          return cls
            .replace(/amber-/g, 'pink-')
            .replace(/rgba\\(245,158,11/g, 'rgba(236,72,153')
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

      // Document selection theme syncing
      useEffect(() => {
        if (theme === 'pink') {
          document.body.classList.remove('selection:bg-amber-500', 'selection:text-slate-950');
          document.body.classList.add('selection:bg-pink-500', 'selection:text-slate-950');
        } else {
          document.body.classList.remove('selection:bg-pink-500', 'selection:text-slate-950');
          document.body.classList.add('selection:bg-amber-500', 'selection:text-slate-950');
        }
      }, [theme]);
      
      // Timer States supporting Background Timer
      const [timerActive, setTimerActive] = useState(false);
      const [timerLeft, setTimerLeft] = useState(60);
      const [timerTotal, setTimerTotal] = useState(60);
      const [timerEndTime, setTimerEndTime] = useState(null);

      // Audio Beep Ref
      const playBeep = () => {
        try {
          const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          const oscillator = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();
          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);
          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
          gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
          oscillator.start(audioCtx.currentTime);
          oscillator.stop(audioCtx.currentTime + 0.3);
        } catch (e) {
          console.warn('Audio contextual beep blocked or unsupported.');
        }
      };

      // Load data from LocalStorage
      useEffect(() => {
        const savedCharges = localStorage.getItem('glowfit_charges');
        const savedSeries = localStorage.getItem('glowfit_series');
        const savedModalities = localStorage.getItem('glowfit_cardio_modalities');
        
        if (savedCharges) setCharges(JSON.parse(savedCharges));
        if (savedSeries) setCompletedSeries(JSON.parse(savedSeries));
        if (savedModalities) setCardioModalities(JSON.parse(savedModalities));

        // Background Timer loader
        const savedEndTime = localStorage.getItem('glowfit_timer_endtime');
        const savedTotal = localStorage.getItem('glowfit_timer_total');
        if (savedEndTime && savedTotal) {
          const endTime = parseInt(savedEndTime, 10);
          const total = parseInt(savedTotal, 10);
          const now = Date.now();
          if (endTime > now) {
            setTimerEndTime(endTime);
            setTimerTotal(total);
            setTimerLeft(Math.max(0, Math.round((endTime - now) / 1000)));
            setTimerActive(true);
          } else {
            localStorage.removeItem('glowfit_timer_endtime');
            localStorage.removeItem('glowfit_timer_total');
          }
        }
      }, []);

      // Rest Timer Logic
      useEffect(() => {
        let interval = null;
        if (timerActive && timerEndTime !== null) {
          interval = setInterval(() => {
            const now = Date.now();
            const remaining = Math.max(0, Math.round((timerEndTime - now) / 1000));
            setTimerLeft(remaining);
            if (remaining === 0) {
              playBeep();
              setTimerActive(false);
              setTimerEndTime(null);
              localStorage.removeItem('glowfit_timer_endtime');
              localStorage.removeItem('glowfit_timer_total');
            }
          }, 1000);
        }
        return () => {
          if (interval) clearInterval(interval);
        };
      }, [timerActive, timerEndTime]);

      const activeWorkout = WORKOUT_DAYS.find(d => d.day === currentDay) || WORKOUT_DAYS[0];

      // Save to localStorage helpers
      const saveCharges = (newCharges) => {
        setCharges(newCharges);
        localStorage.setItem('glowfit_charges', JSON.stringify(newCharges));
      };

      const saveSeries = (newSeries) => {
        setCompletedSeries(newSeries);
        localStorage.setItem('glowfit_series', JSON.stringify(newSeries));
      };

      const handleCardioModalityChange = (exerciseId, value) => {
        const updated = {
          ...cardioModalities,
          [exerciseId]: value
        };
        setCardioModalities(updated);
        localStorage.setItem('glowfit_cardio_modalities', JSON.stringify(updated));
      };

      const getCardioModalityLabel = (modId) => {
        switch (modId) {
          case 'esteira': return 'Esteira 🏃‍♀️';
          case 'escada': return 'Escada 🧗‍♀️';
          case 'bike': return 'Bicicleta 🚴‍♀️';
          case 'corda': return 'Corda 🪢';
          default: return 'Esteira 🏃‍♀️';
        }
      };

      // Handle Carga Change
      const handleChargeChange = (exerciseId, value) => {
        saveCharges({
          ...charges,
          [exerciseId]: value
        });
      };

      // Handle Toggle Series
      const handleToggleSeries = (exerciseId, seriesIndex, totalSeries) => {
        const currentSeriesState = completedSeries[exerciseId] || Array(totalSeries).fill(false);
        const nextState = [...currentSeriesState];
        nextState[seriesIndex] = !nextState[seriesIndex];
        
        const updated = {
          ...completedSeries,
          [exerciseId]: nextState
        };
        saveSeries(updated);

        // If newly checked, trigger the rest timer
        if (nextState[seriesIndex]) {
          triggerRestTimer(60);
        }
      };

      const triggerRestTimer = (seconds) => {
        const endTime = Date.now() + seconds * 1000;
        setTimerEndTime(endTime);
        setTimerTotal(seconds);
        setTimerLeft(seconds);
        setTimerActive(true);
        localStorage.setItem('glowfit_timer_endtime', endTime.toString());
        localStorage.setItem('glowfit_timer_total', seconds.toString());
      };

      const handleAdd30s = () => {
        if (!timerEndTime) return;
        const newEndTime = timerEndTime + 30 * 1000;
        setTimerEndTime(newEndTime);
        setTimerTotal(prev => prev + 30);
        setTimerLeft(prev => prev + 30);
        localStorage.setItem('glowfit_timer_endtime', newEndTime.toString());
        localStorage.setItem('glowfit_timer_total', (timerTotal + 30).toString());
      };

      const handleSkipTimer = () => {
        setTimerActive(false);
        setTimerLeft(0);
        setTimerEndTime(null);
        localStorage.removeItem('glowfit_timer_endtime');
        localStorage.removeItem('glowfit_timer_total');
      };

      // Calculate Workout Progress for the current active day
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

      // Effect to automatically open the "TÁ PAGO" modal when reaching 100% progress
      useEffect(() => {
        if (progress === 100 && lastCompletedWorkoutDay !== currentDay) {
          setShowTaPagoModal(true);
          setLastCompletedWorkoutDay(currentDay);
          localStorage.setItem('glowfit_last_completed_day', currentDay);
        } else if (progress < 100 && lastCompletedWorkoutDay === currentDay) {
          // If they uncheck a series and progress falls below 100%, reset the tracked completed day so it can trigger again
          setLastCompletedWorkoutDay('');
          localStorage.removeItem('glowfit_last_completed_day');
        }
      }, [progress, currentDay, lastCompletedWorkoutDay]);

      return (
        <div class={c("max-w-md mx-auto px-4 py-6 select-none font-sans")}>
          
          {/* Header App with JD-style Initials */}
          <header class="mb-6 flex flex-col gap-1">
            <div class="flex items-center justify-between bg-slate-900/50 backdrop-blur-md rounded-2xl p-3 border border-slate-800">
              <div class="flex items-center gap-2">
                <div class={c("p-2 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-500")}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.343 17.657A8 8 0 0017.657 6.343M6.343 17.657l9.9-9.9M6.343 17.657l-1.414 1.414m12.728-12.728L19 4.93M16.243 16.243l1.414-1.414M3.757 3.757l1.414 1.414" />
                  </svg>
                </div>
                <div>
                  <span class={c("text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold block")}>Performance App</span>
                  <h1 class="text-xl font-bold tracking-tight text-white">Ficha de Treino</h1>
                </div>
              </div>

              <div class="flex items-center gap-2">
                {/* Theme Selector Button */}
                <button
                  onClick={toggleTheme}
                  class={c("p-2 rounded-xl border bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20 active:scale-95 transition-all flex items-center justify-center cursor-pointer")}
                  title={theme === 'pink' ? 'Mudar para Modo Amber' : 'Mudar para Mundo Rosa'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </button>

                <div class="w-9 h-9 rounded-full border-2 border-slate-700 flex items-center justify-center overflow-hidden bg-slate-800" title="brenoadf1@gmail.com">
                  <div class={c("text-amber-500 font-bold text-xs")}>RAY</div>
                </div>
              </div>
            </div>
            <p class="text-slate-400 text-xs mt-2 px-1">
              Seu guia mobile-first definitivo com cronômetro de descanso e controle de carga.
            </p>
          </header>

          {/* Elegant Horizontal Days Navigation */}
          {/* Elegant Navigation Tabs matching Design style */}
          <nav class="w-full flex p-1 bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-800 mb-6 sticky top-2 z-30 shadow-2xl">
            {WORKOUT_DAYS.map(d => {
              const isActive = currentDay === d.day;
              return (
                <button
                  key={d.day}
                  onClick={() => {
                    setCurrentDay(d.day);
                    setExpandedExercise(null);
                  }}
                  class={c(\`relative flex-1 py-2 px-1 text-center rounded-full transition-all duration-300 cursor-pointer select-none outline-none focus:outline-none \${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 z-10'
                      : 'text-slate-400 hover:text-slate-200 bg-transparent'
                  }\`)}
                >
                  <div class="flex flex-col items-center justify-center">
                    <span class={\`text-xs md:text-sm font-bold leading-tight \${isActive ? 'text-slate-950' : 'text-slate-200'}\`}>
                      {d.label}
                    </span>
                    <span class={\`text-[9px] font-mono mt-0.5 leading-none tracking-tight \${isActive ? 'text-slate-950/70' : 'text-slate-500'}\`}>
                      {d.focus}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Work progress header panel matching Design aesthetic */}
          <section class="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-4 mb-6 shadow-md">
            <div class="flex justify-between items-center mb-2.5">
              <div class="flex flex-col">
                <span class={c("text-[10px] font-bold text-amber-500 uppercase tracking-widest")}>Progresso do Dia</span>
                <h2 class="text-sm font-bold text-slate-100">{activeWorkout.focus} • {progress}% concluído</h2>
              </div>
              <div class="flex items-center gap-3">
                <button 
                  onClick={handleResetAllWorkouts}
                  class={c(\`flex items-center gap-1 px-2 py-1 rounded-lg border text-[10px] font-bold transition-all cursor-pointer active:scale-95 \${
                    isResetConfirming 
                      ? 'bg-red-500/20 border-red-500/40 text-red-400' 
                      : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }\`)}
                  title="Resetar todas as atividades e cargas"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>{isResetConfirming ? 'Certeza?' : 'Zerar'}</span>
                </button>
                <span class="text-xs font-mono font-bold text-slate-400">{completedSeriesCount}/{totalSeriesCount} séries</span>
              </div>
            </div>
            <div class="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-900">
              <div 
                class={c("bg-amber-500 h-full transition-all duration-500")}
                style={{ width: \`\${progress}%\` }}
              ></div>
            </div>
          </section>

          {/* Exercises list - accordions matching Design aesthetic */}
          <div class="space-y-4">
            {activeWorkout.exercises.map((ex, idx) => {
              const isExpanded = expandedExercise === ex.id;
              const hasCarga = charges[ex.id] && charges[ex.id].trim() !== '';
              const exSeries = completedSeries[ex.id] || Array(ex.series || 1).fill(false);
              
              const isCompleted = ex.type === 'mobility' || ex.type === 'cardio'
                ? exSeries[0]
                : exSeries.length > 0 && exSeries.every(Boolean);

              return (
                <div
                  key={ex.id}
                  class={c(\`rounded-2xl overflow-hidden transition-all duration-300 \${
                    isExpanded 
                      ? 'bg-slate-800 border-2 border-amber-500/50 shadow-lg shadow-amber-500/10' 
                      : isCompleted
                      ? 'bg-slate-800/40 border border-slate-700/60 opacity-60'
                      : 'bg-slate-850/70 border border-slate-750/80 hover:border-slate-700/80'
                  }\`)}
                >
                  {/* Card Main Bar (Accordion header) */}
                  <div
                    onClick={() => setExpandedExercise(isExpanded ? null : ex.id)}
                    class="p-4 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div class="flex-1 pr-3">
                      <div class="flex items-center gap-2 mb-1">
                        <span class={c(\`text-[9px] font-bold uppercase tracking-wider \${
                          ex.type === 'mobility'
                            ? 'text-indigo-400'
                            : ex.type === 'cardio'
                            ? 'text-emerald-400'
                            : 'text-amber-500'
                        }\`)}>
                          {ex.type === 'mobility' ? 'Mobilidade' : ex.type === 'cardio' ? 'Cardio' : \`\${ex.series} × \${ex.reps}\`}
                        </span>
                        {isCompleted && (
                          <span class="text-[9px] font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">
                            ✓ Feito
                          </span>
                        )}
                      </div>
                      
                      <h3 class={\`font-bold text-base leading-tight tracking-tight \${
                        isCompleted ? 'text-slate-500 line-through' : 'text-slate-100'
                      }\`}>
                        {ex.name}
                      </h3>
                      
                      {/* Weight or Cardio references when closed */}
                      {ex.type === 'cardio' ? (
                        !isExpanded && (
                          <div class={c("mt-1 text-xs text-emerald-400 font-mono font-bold flex items-center gap-1.5")}>
                            <span>⏱️ {charges[ex.id] || ex.reps.replace(' min', '')} min • {getCardioModalityLabel(cardioModalities[ex.id] || 'esteira')}</span>
                          </div>
                        )
                      ) : ex.type === 'mobility' ? (
                        !isExpanded && (
                          <div class={c("mt-1 text-xs text-teal-400 font-mono font-bold flex items-center gap-1.5")}>
                            <span>⏱️ {charges[ex.id] || ex.reps.replace(' min', '')} min</span>
                          </div>
                        )
                      ) : (
                        hasCarga && !isExpanded && (
                          <div class={c("mt-1 text-xs text-amber-500 font-mono font-bold flex items-center gap-1")}>
                            <span>🏋️ {charges[ex.id]} kg</span>
                          </div>
                        )
                      )}
                    </div>

                    <div class="text-slate-500 p-1">
                      <div class={c(\`transition-transform duration-200 \${isExpanded ? 'rotate-180 text-amber-500' : 'text-slate-400'}\`)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Accordion Body */}
                  {isExpanded && (
                    <div class="px-4 pb-5 bg-slate-900/30 space-y-4 overflow-hidden border-t border-slate-700/50 pt-4">
                      {/* Tip box */}
                      <p class="text-[11px] text-slate-400 leading-relaxed">
                        <strong class={c("text-amber-500 font-bold")}>Dica: </strong>
                        {ex.tip}
                      </p>

                      {/* Series checking & weight/cardio inputs */}
                      <div class="flex flex-col space-y-3">
                        {/* Cardio Modality Selector */}
                        {ex.type === 'cardio' && (
                          <div class="bg-slate-950/40 rounded-xl p-2.5 border border-slate-800 flex flex-col space-y-1.5">
                            <label class="text-[9px] uppercase text-slate-500 font-bold tracking-wider">Tipo de Cardio</label>
                            <div class="grid grid-cols-2 gap-1.5">
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
                                    class={c(\`py-1.5 px-2 rounded-lg text-xs font-bold border transition-all cursor-pointer text-center \${
                                      isSelected 
                                        ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-sm' 
                                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
                                    }\`)}
                                  >
                                    {opt.label}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div class="flex items-center space-x-3">
                          {/* Carga Weight or Cardio Duration input box */}
                          <div class="flex-1 bg-slate-900 rounded-lg p-2 border border-slate-700 flex flex-col">
                            <label class="text-[9px] uppercase text-slate-500 font-bold">
                              {(ex.type === 'cardio' || ex.type === 'mobility') ? 'Tempo (min)' : 'Carga (kg)'}
                            </label>
                            <input 
                              type="text" 
                              inputMode="decimal"
                              placeholder={(ex.type === 'cardio' || ex.type === 'mobility') ? ex.reps.replace(' min', '') : '--'} 
                              value={charges[ex.id] || ''} 
                              onChange={(e) => handleChargeChange(ex.id, e.target.value)}
                              class="bg-transparent text-sm font-bold text-white focus:outline-none w-full placeholder-slate-700"
                            />
                          </div>

                          {/* Checklist circles counter for series */}
                          <div class="flex space-x-1.5 items-center">
                            {ex.type === 'mobility' || ex.type === 'cardio' ? (
                              <button
                                onClick={() => handleToggleSeries(ex.id, 0, 1)}
                                class={c(\`px-4 py-2 rounded-full text-[11px] font-bold border transition-all duration-300 cursor-pointer uppercase \${
                                  exSeries[0]
                                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                                    : 'border-slate-600 text-slate-400 bg-transparent'
                                }\`)}
                              >
                                {exSeries[0] ? '✓ Feito' : 'Concluir'}
                              </button>
                            ) : (
                              <div class="flex space-x-1.5">
                                {Array.from({ length: ex.series }).map((_, sIdx) => {
                                  const isChecked = exSeries[sIdx] || false;
                                  return (
                                    <button
                                      key={sIdx}
                                      onClick={() => handleToggleSeries(ex.id, sIdx, ex.series)}
                                      class={c(\`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[11px] font-bold transition-all duration-300 cursor-pointer \${
                                        isChecked
                                          ? 'border-amber-500 text-amber-500 bg-amber-500/10'
                                          : 'border-slate-650 text-slate-500 bg-transparent hover:border-slate-500'
                                      }\`)}
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

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Clear Local History Option */}
          <footer class="mt-12 text-center pb-8">
            <p class="text-xs text-slate-600 font-mono">Allenamento Rayssa • Desenvolvido com React</p>
            <button 
              onClick={() => {
                if (confirm("Deseja realmente limpar todo o histórico de cargas e progresso?")) {
                  localStorage.removeItem('glowfit_charges');
                  localStorage.removeItem('glowfit_series');
                  setCharges({});
                  setCompletedSeries({});
                }
              }}
              class={c("text-[10px] font-mono text-slate-600 hover:text-amber-500 underline mt-2 transition-colors")}
            >
              Limpar histórico do LocalStorage
            </button>
          </footer>

          {/* Intelligent Floating Rest Timer */}
          {timerActive && (
            <div class="fixed bottom-4 left-4 right-4 max-w-sm mx-auto bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl p-4 z-50 flex flex-col gap-2.5 animate-slide-up">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="flex h-2.5 w-2.5 relative">
                    <span class={c("animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75")}></span>
                    <span class={c("relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500")}></span>
                  </span>
                  <span class={c("text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider")}>Tempo de Descanso</span>
                </div>
                <div class="text-2xl font-mono font-bold text-white tracking-wider flex items-baseline">
                  {Math.floor(timerLeft / 60)}:{(timerLeft % 60).toString().padStart(2, '0')}
                  <span class="text-xs text-slate-400 ml-0.5">s</span>
                </div>
              </div>

              {/* Progress Bar in timer */}
              <div class="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div 
                  class={c("bg-gradient-to-r from-amber-500 to-yellow-400 h-full transition-all duration-1000")}
                  style={{ width: \`\${(timerLeft / timerTotal) * 100}%\` }}
                ></div>
              </div>

              {/* Fast Controls */}
              <div class="grid grid-cols-2 gap-2 mt-1">
                <button 
                  onClick={handleAdd30s}
                  class="bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-xl py-2 text-xs font-mono font-semibold text-slate-300 flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
                >
                  ➕ +30s
                </button>
                <button 
                  onClick={handleSkipTimer}
                  class={c("bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl py-2 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-lg shadow-amber-500/15")}
                >
                  ⏩ Pular
                </button>
              </div>
            </div>
          )}

          {/* "TÁ PAGO" Modal Popup */}
          {showTaPagoModal && (
            <div 
              onClick={() => setShowTaPagoModal(false)}
              class="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-pointer select-none"
            >
              <div 
                class={c("bg-slate-900 border border-amber-500/30 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(245,158,11,0.25)] relative overflow-hidden")}
              >
                {/* Decorative radial ambient glow */}
                <div class={c("absolute -inset-10 bg-gradient-to-tr from-amber-500/10 via-transparent to-amber-500/5 rounded-full blur-3xl pointer-events-none")}></div>

                <div class="relative z-10 flex flex-col items-center justify-center gap-6">
                  {/* Bouncing emoji */}
                  <div class="text-7xl drop-shadow-lg animate-bounce">
                    💪🏼
                  </div>

                  <div class="flex flex-col gap-2">
                    <h2 class={c("text-4xl font-black tracking-widest text-amber-500 font-sans uppercase")}>
                      TÁ PAGO
                    </h2>
                    <p class="text-slate-400 text-sm font-medium tracking-wide">
                      Treino de hoje concluído com sucesso!
                    </p>
                  </div>

                  <div class="pt-4">
                    <span class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-800 text-xs text-slate-400 border border-slate-700/60 font-semibold">
                      Toque em qualquer lugar para fechar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>`;
}
