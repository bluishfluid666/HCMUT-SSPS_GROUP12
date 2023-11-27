import { PaperSize, PrintRequest, Printer, Purchase } from 'types';

const printers: Printer[] = [
  {
    id: '102347823',
    brand: 'HP',
    model: 'LaserJet 1020',
    description: 'Black and white laser printer',
    location: 'Room 202',
    status: 'Enabled',
    waitedTime: 60,
  },
  {
    id: '102347824',
    brand: 'Canon',
    model: 'Pixma G2010',
    description: 'Color inkjet printer',
    location: 'Room 203',
    status: 'Enabled',
    waitedTime: 12,
  },
  {
    id: '102347825',
    brand: 'Epson',
    model: 'LQ-310',
    description: 'Dot matrix printer',
    location: 'Room 204',
    status: 'Disabled',
    waitedTime: 1,
  },
  {
    id: '102347826',
    brand: 'Brother',
    model: 'HL-1210W',
    description: 'Black and white laser printer',
    location: 'Room 205',
    status: 'Enabled',
    waitedTime: 5,
  },
  {
    id: '102347827',
    brand: 'HP',
    model: 'DeskJet 2135',
    description: 'Color inkjet printer',
    location: 'Room 206',
    waitedTime: 5,
    status: 'Enabled',
  },
];

const printRequests: PrintRequest[] = [
  {
    id: '234234234',
    status: 'Printing',
    files: [
      {
        id: '345345345',
        name: 'test.pdf',
        mimeType: 'PDF',
        printPageCount: 1,
        printPages: '1',
        pagePerSheet: 1,
        paperSize: PaperSize.A4,
        copies: 1,
        side: 'OneSided',
        orientation: 'Portrait',
        uploadStatus: 100,
      },
    ],
    fileCount: 1,
    printer: '102347823',
    pageCount: 1,
    createdAt: 1701109384205,
  },
  {
    id: '234234235',
    status: 'Sucesss',
    files: [
      {
        id: '345345346',
        name: 'test.pdf',
        mimeType: 'PDF',
        printPageCount: 1,
        printPages: '1',
        pagePerSheet: 1,
        paperSize: PaperSize.A4,
        copies: 1,
        side: 'OneSided',
        orientation: 'Portrait',
        uploadStatus: 100,
      },
      {
        id: '345345347',
        name: 'test.pdf',
        mimeType: 'PDF',
        printPageCount: 1,
        printPages: '1',
        pagePerSheet: 1,
        paperSize: PaperSize.A4,
        copies: 1,
        side: 'OneSided',
        orientation: 'Portrait',
        uploadStatus: 100,
      },
    ],
    fileCount: 2,
    printer: '102347824',
    pageCount: 2,
    createdAt: 1701109384205,
  },
  {
    id: '234234236',
    status: 'Pending',
    files: [
      {
        id: '345345348',
        name: 'test.pdf',
        mimeType: 'PDF',
        printPageCount: 1,
        printPages: '1',
        pagePerSheet: 1,
        paperSize: PaperSize.A4,
        copies: 1,
        side: 'OneSided',
        orientation: 'Portrait',
        uploadStatus: 100,
      },
      {
        id: '345345349',
        name: 'test.pdf',
        mimeType: 'PDF',
        printPageCount: 1,
        printPages: '1',
        pagePerSheet: 1,
        paperSize: PaperSize.A4,
        copies: 1,
        side: 'OneSided',
        orientation: 'Portrait',
        uploadStatus: 100,
      },
      {
        id: '345345350',
        name: 'test.pdf',
        mimeType: 'PDF',
        printPageCount: 1,
        printPages: '1',
        pagePerSheet: 1,
        paperSize: PaperSize.A4,
        copies: 1,
        side: 'OneSided',
        orientation: 'Portrait',
        uploadStatus: 100,
      },
    ],
    fileCount: 3,
    printer: '102347825',
    pageCount: 3,
    createdAt: 1701109384205,
  },
];

const purchases: Purchase[] = [
  {
    id: '234234234',
    createdAt: 1701109384205,
    amount: 1,
  },
  {
    id: '234234235',
    createdAt: 1701109384205,
    amount: 3,
  },
  {
    id: '234234236',
    createdAt: 1701109384205,
    amount: 5,
  },
];

export { printers, printRequests, purchases };
