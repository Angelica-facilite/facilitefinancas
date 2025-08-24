'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { useSidebar } from "./ui/sidebar"
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"

interface DialogFormProps {
  children: React.ReactNode,
  open: boolean,
  onOpenChange: Dispatch<SetStateAction<boolean>>,

}

const DialogForms: React.FC<DialogFormProps> = ({ children, open, onOpenChange }) => {
    const { isMobile } = useSidebar()


  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerOverlay />
      <DrawerContent className='p-2'>
        {children}
      </DrawerContent>
    </Drawer>
  )
}

export default DialogForms
