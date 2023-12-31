export type User = {
  name: string;
  email: string;
  studentId: string;
  faculty: string;
  picture: string;
  role: 'Manage' | 'User' | 'Financial' | 'Technical';
};

export enum PaperSize {
  A1 = 'A1',
  A2 = 'A2',
  A3 = 'A3',
  A4 = 'A4',
  A5 = 'A5',
  A6 = 'A6',
}
export type Document = {
  id: string;
  name: string;
  mimeType: string;
  printPageCount: number | 'Custom';
  printPages?: string;
  pagePerSheet: 1 | 2 | 4 | 6 | 9;
  paperSize: PaperSize;
  copies: number;
  side: 'OneSided' | 'TwoSided';
  orientation: 'Portrait' | 'Landscape';
  uploadStatus: number;
};

export type PrintRequest = {
  id: string;
  files: Document[];
  fileCount: number;
  pageCount: number;
  createdAt: number;
  status: 'Printing' | 'Pending' | 'Sucesss' | 'Failed';
  printer?: string;
};

export type Printer = {
  id: string;
  brand: string;
  model: string;
  description: string;
  location: string;
  status: 'Enabled' | 'Disabled';
  waitedTime: number;
  lastUsed: number;
};

export type Purchase = {
  id: string;
  createdAt: number;
  amount: number;
};
