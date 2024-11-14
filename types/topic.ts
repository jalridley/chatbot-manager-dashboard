interface Content {
  subheader: string;
  text: string[];
}

export interface Topic {
  title: string;
  question: string;
  content: Content[];
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
}
