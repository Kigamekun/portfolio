import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium, IconMail } from "@tabler/icons-react";

const dataSocialMedia = [
  {
    id: 0,
    icon: <IconBrandLinkedin className="text-[#E2FBFF] hover:text-white cursor-pointer" />,
    navigate_url: "https://www.linkedin.com/in/reksa-prayoga-syahputra/",
  },
  
  {
    id: 1,
    icon: <IconBrandGithub className="text-[#E2FBFF] hover:text-white cursor-pointer" />,
    navigate_url: "https://github.com/KIGAMEKUN",
  },
  {
    id: 2,
    icon: <IconMail className="text-[#E2FBFF] hover:text-white cursor-pointer" />,
    navigate_url: "mailto:reksa.prayoga1012@gmail.com",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center pt-4 gap-6">
      {dataSocialMedia.map(({ id, icon, navigate_url }) => (
        <a href={navigate_url} key={id}>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
