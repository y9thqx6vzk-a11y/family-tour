export default function Footer() {
  return (
    <footer className="bg-olive text-cream/70 py-12 text-center border-t border-olive/20">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-display font-bold text-cream mb-2">נתראה בצפון!</h3>
        <p className="mb-8">מחכים בקוצר רוח לטיול המשפחתי. תביאו מצב רוח טוב והרבה אנרגיות!</p>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} הטיול המשפחתי 2-4 אוגוסט
        </div>
      </div>
    </footer>
  );
}
