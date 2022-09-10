const Footer = () => {
  const template = `
  <footer id="footer" data-sal="slide-up" data-sal-duration="800" data-sal-delay="600" data-sal-easing="ease-out-bounce">
    <div class="container flex-footer">
      <div class="copyright">
        &copy; 2022 <span>r</span>aven<span>b</span>arrogo
      </div>
      <div>
        <ul class="social-links">
          <li><a href="https://www.linkedin.com/in/raven-barrogo" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li><a href="https://github.com/VEN-github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://codepen.io/ravenbarrogo" target="_blank" rel="noopener noreferrer">CodePen</a></li>
        </ul>
      </div>
    </div>
  </footer>`;

  return template;
};

export default Footer;
