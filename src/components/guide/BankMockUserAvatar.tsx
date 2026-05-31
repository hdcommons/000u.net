import Image from "next/image";

export function BankMockUserAvatar() {
  return (
    <div className="bank-avatar bank-avatar--logo">
      <Image
        src="/logo-000u-trans.png"
        alt=""
        width={32}
        height={32}
        className="bank-avatar-img"
      />
    </div>
  );
}
