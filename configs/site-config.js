import { Box } from "@chakra-ui/react";
import { BiPhone, BiPhoneCall, BiPhoneIncoming } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
  FaTelegram
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdCallMade } from "react-icons/md";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Jamshid Maruf. All Rights Reserved.`,
  author: {
    name: "Jamshid Maruf",
    accounts: [
      {
        url: "https://github.com/wonderboy1w3",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://t.me/the_dotnet",
        label: "Telegram Account",
        type: "telegram",
        icon: <FaTelegram />
      },
      {
        url: "https://www.linkedin.com/in/jamshid-maruf-514198242/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "jamshidKhujaqulov@gmail.com",
        label: "Mail",
        type: "gray",
        icon: <FiMail />
      },
      {
        url: "https://www.google.com/search?q=%2B998975777552&oq=%2B998975777552&aqs=chrome..69i57.5285j0j7&sourceid=chrome&ie=UTF-8",
        label: "Phone",
        type: "gray",
        icon: <BiPhoneIncoming/>
      },
      {
        url: "https://www.google.com/maps/dir/41.279514,69.194371/41.279513,69.194375/@41.2794635,69.1944454,16z/data=!4m2!4m1!3e0",
        label: "Tashkent | Uzbekistan",
        type: "gray",
        icon: <GoLocation/>
      }
    ]
  }
};

export default siteConfig;
