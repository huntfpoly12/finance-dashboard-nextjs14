import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

function NewAccountSheet() {
  const {isOpen, onClose} = useNewAccount();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>
            New Account
          </SheetTitle>
          <SheetDescription>
            Create a new account to start tracking your transaction.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default NewAccountSheet;