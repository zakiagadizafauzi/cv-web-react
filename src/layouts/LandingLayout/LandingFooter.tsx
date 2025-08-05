export default function LandingFooter() {
  const year = new Date().getFullYear();
  // const navigate = useNavigate();

  return (
    <footer className="footer footer-center p-4 mt-16 mx-auto">
      <aside>
        <p>© {year} Kurniawan Try Yudha</p>
      </aside>
    </footer>
  );
}
