import { Article } from "../types";

export const articles: Article[] = [
  {
    slug: "fievre-enfant",
    title: "Que faire en cas de fièvre chez l’enfant ?",
    category: "Santé",
    summary: "La fièvre chez l’enfant est une source d’inquiétude fréquente pour les parents. Apprenez à réagir correctement et à reconnaître les signes qui nécessitent une consultation médicale.",
    content: {
      introduction: "La fièvre est une augmentation de la température du corps au-dessus de la normale (généralement 38°C). C’est une réaction de défense naturelle de l’organisme contre une infection. Bien que souvent bénigne, il est important de savoir comment la gérer.",
      sections: [
        {
          title: "Mesurer la température",
          text: "Utilisez un thermomètre électronique par voie rectale pour les plus petits, c’est la méthode la plus fiable. Pour les plus grands, la voie buccale ou axillaire (sous le bras) est possible, mais moins précise."
        },
        {
          title: "Gestes simples pour le confort",
          text: "Ne couvrez pas trop votre enfant. Proposez-lui régulièrement à boire de l’eau pour éviter la déshydratation. Maintenez la température de sa chambre autour de 19-20°C."
        },
        {
          title: "Quand consulter un médecin ?",
          text: "Consultez immédiatement si votre enfant a moins de 3 mois, si la fièvre est très élevée (> 40°C), s’il a des convulsions, des difficultés à respirer, des vomissements, ou si son état général vous inquiète."
        }
      ]
    },
    sources: ["Assurance Maladie - ameli.fr", "Organisation Mondiale de la Santé"],
    medicalDisclaimer: "Cet article est à titre informatif et ne remplace pas un avis médical. En cas de doute, consultez toujours un professionnel de santé."
  },
  {
    slug: "symptomes-stress",
    title: "Reconnaître les symptômes du stress et comment y faire face",
    category: "Santé mentale",
    summary: "Le stress fait partie de la vie, mais lorsqu’il devient chronique, il peut nuire à votre santé. Apprenez à en identifier les signes et à adopter des stratégies pour le gérer.",
    content: {
      introduction: "Le stress est une réponse de l’organisme face à une pression ou une contrainte. Il peut être physique (fatigue, maux de tête), émotionnel (irritabilité, anxiété) ou comportemental (isolement, troubles du sommeil).",
      sections: [
        {
          title: "Techniques de relaxation",
          text: "La respiration profonde, la méditation ou le yoga sont des outils efficaces pour réduire le niveau de stress. Quelques minutes par jour peuvent faire une grande différence."
        },
        {
          title: "Activité physique régulière",
          text: "Le sport est un excellent exutoire. Il libère des endorphines, les hormones du bien-être, qui aident à combattre le stress et l’anxiété."
        },
        {
          title: "Gestion du temps et des priorités",
          text: "Organiser ses journées, définir des objectifs réalistes et apprendre à dire non sont des compétences clés pour éviter de se sentir dépassé et stressé."
        }
      ]
    },
    sources: ["Fédération pour la Santé Mentale", "Institut National de Recherche et de Sécurité (INRS)"],
    medicalDisclaimer: "Cet article est à titre informatif et ne remplace pas un avis médical. En cas de doute, consultez toujours un professionnel de santé."
  },
  {
    slug: "prevenir-grippe",
    title: "Les 10 gestes simples pour prévenir la grippe",
    category: "Prévention",
    summary: "La grippe saisonnière est une infection virale contagieuse. Adopter des gestes barrières simples et efficaces est le meilleur moyen de s’en protéger et de limiter sa propagation.",
    content: {
      introduction: "Chaque hiver, l’épidémie de grippe touche des millions de personnes. La prévention repose sur des mesures d’hygiène et, pour les plus fragiles, sur la vaccination.",
      sections: [
        {
          title: "Lavage des mains",
          text: "Lavez-vous les mains fréquemment à l’eau et au savon, ou avec une solution hydroalcoolique. C’est le geste le plus important."
        },
        {
          title: "Éviter les contacts rapprochés",
          text: "Limitez les contacts avec les personnes malades. Si vous êtes malade, restez chez vous pour ne pas contaminer votre entourage."
        },
        {
          title: "Port du masque",
          text: "Si vous présentez des symptômes (toux, fièvre), portez un masque chirurgical en présence d’autres personnes."
        }
      ]
    },
    sources: ["Santé publique France", "Institut Pasteur"],
    medicalDisclaimer: "Cet article est à titre informatif et ne remplace pas un avis médical. En cas de doute, consultez toujours un professionnel de santé."
  },
  {
    slug: "bien-manger-immunite",
    title: "Bien manger pour renforcer son immunité",
    category: "Nutrition",
    summary: "Une alimentation saine et équilibrée joue un rôle clé dans le bon fonctionnement de notre système immunitaire. Découvrez les nutriments essentiels pour vous protéger des infections.",
    content: {
      introduction: "Votre assiette est votre première alliée santé. Certains aliments sont particulièrement riches en vitamines et minéraux qui aident à booster vos défenses naturelles.",
      sections: [
        {
          title: "Vitamine C",
          text: "Présente dans les agrumes, le kiwi, le poivron ou le brocoli, elle est connue pour son rôle de soutien immunitaire. Consommez-en chaque jour."
        },
        {
          title: "Zinc et Sélénium",
          text: "Ces oligo-éléments sont cruciaux. On les trouve dans les fruits de mer, la viande, les légumineuses et les noix."
        },
        {
          title: "Ferments lactiques",
          text: "Les yaourts et autres produits fermentés nourrissent votre microbiote intestinal, un acteur majeur de l’immunité."
        }
      ]
    },
    sources: ["ANSES - Agence nationale de sécurité sanitaire de l’alimentation", "MangerBouger.fr"],
    medicalDisclaimer: "Cet article est à titre informatif et ne remplace pas un avis médical. En cas de doute, consultez toujours un professionnel de santé."
  },
  {
    slug: "quand-consulter-medecin",
    title: "Quand consulter un médecin ? Les signaux d’alerte",
    category: "Symptômes",
    summary: "Il n’est pas toujours facile de savoir si un symptôme est anodin ou s’il nécessite un avis médical. Voici quelques signaux d’alerte à ne pas ignorer.",
    content: {
      introduction: "L’autodiagnostic peut être dangereux. Apprendre à reconnaître les situations qui justifient une consultation médicale est essentiel pour votre santé.",
      sections: [
        {
          title: "Douleur thoracique",
          text: "Toute douleur soudaine et intense dans la poitrine, surtout si elle irradie dans le bras ou la mâchoire, est une urgence médicale. Appelez le 15."
        },
        {
          title: "Difficultés respiratoires",
          text: "Un essoufflement soudain ou qui s’aggrave rapidement doit vous amener à consulter sans tarder."
        },
        {
          title: "Changements inexpliqués",
          text: "Une perte de poids rapide et involontaire, une fatigue extrême persistante ou un changement d’aspect d’un grain de beauté sont des motifs de consultation."
        }
      ]
    },
    sources: ["Société Française de Médecine d’Urgence", "Ligue contre le cancer"],
    medicalDisclaimer: "Cet article est à titre informatif et ne remplace pas un avis médical. En cas de doute, consultez toujours un professionnel de santé."
  }
];