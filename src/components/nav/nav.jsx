"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
                    href="/teachersroom"
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
                    href="/gallerypage"
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
                    href="/blog"
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
                    href="/archive"
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
          </NavigationMenuList>
          <NavigationMenuList className="flex justify-between flex-wrap">
            <div className="lg:hidden flex flex-row justify-between">
              <NavigationMenuItem className="h3 pointer-events-none">
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/#" className="h3 hover:text-hover-nav">
                    Ільницький спортивно-гуманітарний ліцей
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="relative flex flex-col">
                <DropdownMenu className="w-full">
                  <DropdownMenuTrigger asChild>
                    <Image
                      src="/simple-line-icons_menu.svg"
                      height={35}
                      width={35}
                      alt="menu"
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    className="lg:hidden w-full h-screen md:h-full mt-[10%]"
                    align="start"
                  >
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav block"
                        >
                          Головна
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Адміністрація
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/teachersroom"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Учительська
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Класи
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/gallerypage"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Галерея
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/blog"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Новини
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/archive"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Архів
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/#"
                          className="h3 text-[16px]! hover:text-hover-nav"
                        >
                          Зворотній зв'язок
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </nav>
  );
}