import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

function Footer() {
  // Data for sections
  const FooterData = [
    {
      title: "About",
      links: [
        "About MyFeedback",
        "Investor Relations",
        "Trust & Safety",
        "Content Guidelines",
        "Terms of Service",
        "Privacy Policy",
        "Your Privacy Choices",
      ],
    },
    {
      title: "MyFeedback",
      links: [
        "MyFeedback for business",
        "Collections",
        "Talk",
        "Events",
        "MyFeedback blog",
        "Support",
        "Developers",
      ],
    },
  ];

  // Data for dropdowns
  const languages = ["English", "French", "German", "Japanese"];
  const countries = ["United States", "Canada", "Singapore", "Bangladesh"];

  return (
    <footer className="border-t mt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Top Section */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {/* Map Sections */}
          {FooterData.map((section, index) => (
            <div key={index} className=" w-40 mx-auto  text-left">
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Languages + Countries */}
          <div className="text-center lg:text-left mx-auto lg:mx-0">
            <div className="inline-block">
              {/* Languages */}
              <h3 className="font-semibold mb-3">Languages</h3>
              <FormControl
                size="small"
                className="w-full sm:w-40 mx-auto lg:mx-0"
              >
                <Select defaultValue={languages[0]}>
                  {languages.map((lang, i) => (
                    <MenuItem key={i} value={lang}>
                      {lang}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Countries */}
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Countries</h3>
                <FormControl
                  size="small"
                  className="w-full sm:w-40 mx-auto lg:mx-0"
                >
                  <Select defaultValue={countries[0]}>
                    {countries.map((country, i) => (
                      <MenuItem key={i} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t text-center py-4 text-sm text-gray-600">
          Copyright © {new Date().getFullYear()} myfeedback, designed by scott
          Scott
        </div>
      </div>
    </footer>
  );
}

export default Footer;
