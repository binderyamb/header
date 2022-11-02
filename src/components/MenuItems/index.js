import { FaHome, FaUser, FaBitbucket } from "react-icons/fa";

export const MenuItems = [
  {
    name: "Home",
    path: "/home",
    className: "NavbarMenuItems",
    classNameMobile: "MobileMenuItems",
    icon: <FaHome className="MobileIcons" />,
  },
  {
    name: "Services",
    path: "/services",
    className: "NavbarMenuItems",
    classNameMobile: "MobileMenuItems",
    icons: <FaUser className="MobileIcons" />,
  },
  {
    name: "Projects",
    path: "/projects",
    className: "NavbarMenuItems",
    classNameMobile: "MobileMenuItems",
    icons: <FaBitbucket className="MobileIcons" />,
  },
];
