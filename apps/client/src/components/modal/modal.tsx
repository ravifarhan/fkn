"use client";

import { Button } from "@repo/ui/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/components/drawer";
import { useIsMobile } from "@repo/ui/hooks/use-mobile";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  summary: string | false;
  content: React.ReactNode;
  placeholder?: string;
  className?: string;
  maxWidth?: string;
  disabled?: boolean;
}

export function Modal({
  open,
  setOpen,
  title,
  summary,
  content,
  placeholder = "Pilih opsi",
  className,
  maxWidth = "max-w-lg",
  disabled = false,
}: ModalProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            type="button"
            variant="outline"
            disabled={disabled}
            className={className}
          >
            <span className="truncate w-full">{summary || placeholder}</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className={`mx-auto w-full ${maxWidth} flex flex-col h-[70vh]`}>
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
            </DrawerHeader>
            <div className="flex-1 overflow-y-auto p-2">{content}</div>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          disabled={disabled}
          className={className}
        >
          <span className="truncate w-full">{summary || placeholder}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className={`${maxWidth} flex flex-col h-[80vh]`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-2">{content}</div>
      </DialogContent>
    </Dialog>
  );
}
