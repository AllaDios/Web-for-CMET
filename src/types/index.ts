export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  schedule: {
    [key: string]: string[]; // day: available hours
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  date: string;
  time: string;
  service: string;
}