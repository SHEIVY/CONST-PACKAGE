export interface Sadam {
    layer: any;
    id: number;
    type: number; // id of type
    slotX: number;
    slotY: number;
    priority: number; // constants 1/2/לא מבוקר צהל/לא מבוקר רלפמ
    pikudId: number; // פיקוד - constants
    unitId: number;
    areaName: string; // אזור גאוגרפי
    plantDate: Date; // הנחה
    clearDate: Date; // הרמה
    status: number; // constants
    isIdf: boolean;
    isOperational: boolean;
    fenceStatus: number; // constants
    facilityId?: number; // constants nullable
    comments?: string; // nullable
    mineTypes: number[]; // constants
    coordinates: any;
    risks: number[]; // constants
  }