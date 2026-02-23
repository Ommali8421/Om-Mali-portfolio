import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'ommali8421@gmail.com',
    href: 'mailto:ommali8421@gmail.com',
  },
  {
    social: 'phone',
    link: '+91-7038694774',
    href: 'tel:+917038694774',
  },
  {
    social: 'github',
    link: 'Ommali8421',
    href: 'https://github.com/Ommali8421',
  },
  {
    social: 'linkedin',
    link: 'om-mali-344837329',
    href: 'https://www.linkedin.com/in/om-mali-344837329',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
