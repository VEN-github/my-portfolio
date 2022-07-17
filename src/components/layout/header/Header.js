import Resume from '../../../assets/upload/Raven Barrogo - Resume.pdf';

const Header = () => {
  const template = `
  <header id="header" data-sal="slide-up" data-sal-duration="800" data-sal-easing="ease-out-back">
    <div class="container flex">
      <a href="https://ravenbarrogo.me/" id="logo"><span>r</span><span>aven</span><span>b</span><span>arrogo</span></a>
      <nav>
        <ul class="nav-links">
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
          <li><a href="${Resume}" target="_blank" rel="noopener noreferrer" class="nav-link btn-outline-primary">Resume</a></li>
        </ul>
      </nav>
      <div class="hamburger hamburger--collapse">
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>
  </header>`;

  return template;
};

export default Header;
