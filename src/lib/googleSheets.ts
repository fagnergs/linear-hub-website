// src/lib/googleSheets.ts
const SHEET_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  order: number;
}

export async function fetchSheetData<T>(sheetName: string): Promise<T[]> {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${SHEET_API_KEY}`;
    
    const response = await fetch(url, {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data: ${response.statusText}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length === 0) {
      return [];
    }

    const headers = rows[0];
    const dataRows = rows.slice(1);

    return dataRows.map((row: string[]) => {
      const obj: any = {};
      headers.forEach((header: string, index: number) => {
        obj[header.toLowerCase()] = row[index] || '';
      });
      return obj as T;
    });
  } catch (error) {
    console.error(`Error fetching ${sheetName}:`, error);
    return [];
  }
}

export async function fetchServices(): Promise<Service[]> {
  return fetchSheetData<Service>('Services');
}