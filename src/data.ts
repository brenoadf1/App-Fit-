import { DayWorkout } from './types';

export const WORKOUT_DAYS: DayWorkout[] = [
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
