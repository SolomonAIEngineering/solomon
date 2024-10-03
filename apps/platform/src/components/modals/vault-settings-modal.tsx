"use client";

import { Button } from "@v1/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@v1/ui/dialog";
import { Dialog } from "@v1/ui/dialog";
import { Icons } from "@v1/ui/icons";
import { useState } from "react";
import { VaultSettings } from "../vault-settings";

type Props = {
  documentClassification: boolean;
};

export function VaultSettingsModal({ documentClassification }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
          <Icons.Settings />
        </Button>
      </div>

      <DialogContent
        className="max-w-[455px]"
        onOpenAutoFocus={(evt) => evt.preventDefault()}
      >
        <div className="p-4">
          <DialogHeader className="mb-8">
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Make changes to your vault here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <VaultSettings
            documentClassification={documentClassification}
            onSuccess={() => setOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
