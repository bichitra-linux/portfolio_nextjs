declare module "*.pdf" {
    const content: string;
    export default content;
  }


interface Window {
  gtag: (command: string, eventName: string, params?: any) => void;
}