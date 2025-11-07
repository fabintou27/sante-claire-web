export interface Article {
  slug: string;
  title: string;
  category: 'Santé' | 'Symptômes' | 'Nutrition' | 'Santé mentale' | 'Prévention';
  summary: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      text: string;
    }[];
  };
  sources: string[];
  medicalDisclaimer: string;
}