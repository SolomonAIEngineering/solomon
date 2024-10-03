/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/z47IKUK6sUf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { BankAccountSchema } from "@v1/db/types";
import Image from "next/image";

/**
 * Props for the MettalicCard component.
 * @interface MettalicCardProps
 */
interface MettalicCardProps {
  /** The name of the card issuer (e.g., "Visa", "Mastercard") */
  cardIssuer: string;
  /** The full name of the card holder */
  cardHolderName: string;
  /** The card number, typically 16 digits (spaces allowed for formatting) */
  cardNumber: string;
  bankAccount?: BankAccountSchema;
}

/**
 * MettalicCard component
 *
 * Renders a metallic-looking credit card with customizable details.
 * The card displays the issuer's logo, card holder's name as a signature,
 * and the card number, all on a gradient background with visual effects.
 *
 * @param {MettalicCardProps} props - The props for the MettalicCard component
 * @returns {JSX.Element} The rendered MettalicCard component
 */
export function MettalicCard({
  cardIssuer,
  cardHolderName,
  cardNumber,
}: MettalicCardProps): JSX.Element {
  return (
    <div className="w-[400px] h-[250px] rounded-2xl bg-gradient-to-r from-[#C0C0C0] to-[#9D9D9D] p-6 shadow-lg relative overflow-hidden">
      <div className="absolute top-4 left-4">
        <div className="w-10 h-10 object-cover rounded-xl bg-gradient-to-r from-foreground to-[#d1d1d1]" />
        <div className="text-white text-lg font-semibold tracking-wide">
          {cardIssuer}
        </div>
      </div>
      <div className="absolute top-6 right-6 text-white text-lg font-semibold tracking-wide">
        <div className="text-sm font-cursive text-white italic">
          {cardHolderName}
        </div>
      </div>
      <div className="absolute bottom-6 right-6 text-white font-mono text-lg tracking-widest">
        {cardNumber}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF22] to-[#FFFFFF11] rounded-2xl" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-40 h-40 rounded-full bg-white/20 blur-3xl -top-20 -right-20 animate-spin-slow" />
        <div className="absolute w-40 h-40 rounded-full bg-white/20 blur-3xl bottom-20 right-20 animate-spin-reverse" />
      </div>
    </div>
  );
}
