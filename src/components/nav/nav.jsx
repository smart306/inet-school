"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavBar() {
  return (
    <nav className="w-full fixed z-50">
      <NavigationMenu>
        <div className="my-container py-4">
          <NavigationMenuList className="flex justify-between items-center lg:flex-wrap">
            <div className="hidden lg:flex flex-row ">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Головна
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Адміністрація
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Учительська
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Класи
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Галерея
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Новини
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Архів
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Зворотній зв'язок
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
            <div className="lg:hidden flex flex-row justify-between">
              <NavigationMenuItem className="h3">
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href="/#"
                    className="h3 text-[16px]! hover:text-hover-nav"
                  >
                    Ільницький спортивно-гуманітарний ліцей
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger>
                  <Image
                    src="/simple-line-icons_menu.svg"
                    height={35}
                    width={35}
                    alt="menu"
                  />
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  align="start"
                  className="bg-nav shadow-2xl mt-1 w-46"
                >
                  <ul className="flex flex-col bg-nav shadow-nav shadow-2xl">
                    <li>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav block"
                        >
                          Головна
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Адміністрація
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Учительська
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Класи
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Галерея
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Новини
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Архів
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Зворотній зв'язок
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </nav>
  );
}
