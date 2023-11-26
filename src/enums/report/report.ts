export enum StatusReport {
  waitingForApprove = "מחכה לאישור",
  approved = "מאושר",
  notApproved = "סורב",
  draft = "טיוטה",
}

export enum EventsType {
  uncontrolledEntranceToSadam = `כניסה לא מבוקרת לשד"ם`,
  rescueFromSadam = `חילוץ משד"ם`,
  driftingMinesInSadam = `היסחפות מוקשים בשד"ם`,
  copyingMinesByAnimals = `העתקת מוקשים ע"י בע"ח`,
  steppedOnAMine = `עליה על מוקש`,
  explosionInSadam = `פיצוץ בשד"ם`,
  theftOfMinesFromSadam = `גניבת מוקשים משד"ם`,
  throwingMines = "זריקת מוקשים",
  violationInSadamNA = `הפרה בשד"ם נ"א`,
  mineDetection = "גילוי מוקשים",
  administrative = "מנהלי",
  other = "אחר",
}

export enum GibovType {
  crissCross = "שתי וערב",
  rows = "שורות",
}

export enum ReportsType {
  review = "ביקורת",
  lift = "הרמה",
  gibov = "גיבוב",
  sadamCleare = "הכרזה",
  event = "אירוע",
}

export enum  Risks{
  minesWeeper = "סחף מוקשים",
  copyByAnimals = 'העתקה ע"י בע"ח',
  theftOfSigns = "גניבת גדירות ושלטים",
  theftOfMines = "גניבת מוקשים",
  wasViolated = "הופר",
  scatteredMine = "מיקוש פזיר ",
  overThreeTypesOfMines = "מעל שלוש סוגי מוקשים ",
  mined = "ממולכד",
}

export enum SignStatus {
  signage = "משולט",
  noSignage = "אינו משולט",
  partialSignage = "שילוט חלקי",
  incorrect = "לא תקין",
}

export enum FencingStatus {
  fenced = "מגודר",
  noFenced = "אינו מגודר",
  partialFencing = "גידור חלקי",
  incorrect = "לא תקין",
}

export enum LiftTypes {
  partialLifting = "הרמה חלקית",
  fullLift = "הרמה מלאה",
}

export enum LiftingMethod {
  manual = "ידני",
  mechanical = "מכני",
  integrated = "משולב",
}

export enum EvacutionOperation {
  IDF = `צה"ל`,
  RLPT = `רלפ"ט`,
  unknown = "לא ידוע",
}

export enum Priority {
  a = "א",
  b = "ב",
}
