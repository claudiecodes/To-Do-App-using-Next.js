import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function MenuBarComp() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>All</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Work</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>General</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
