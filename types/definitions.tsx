export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
  created_at: Date;
  updated_at: Date;
};

export type MenuItem = {
  title: string;
  icon: string;
  link: string;
};
