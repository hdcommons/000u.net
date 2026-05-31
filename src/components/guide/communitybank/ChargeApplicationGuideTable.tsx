import { COMMUNITY_BANK_GUIDE } from "@/constants/communityBankGuide";

const CHARGE_GUIDE = COMMUNITY_BANK_GUIDE.chargeApplicationGuide;

export function ChargeApplicationGuideTable({
  tableClassName = "bank-info-table",
  showTitle = false,
}: {
  tableClassName?: string;
  showTitle?: boolean;
}) {
  return (
    <>
      {showTitle ? (
        <p className="bank-info-box-title">{CHARGE_GUIDE.title}</p>
      ) : null}
      <table className={tableClassName}>
        <tbody>
          <tr>
            <th scope="row">신청금액 :</th>
            <td>{CHARGE_GUIDE.amount}</td>
          </tr>
          <tr>
            <th scope="row">입금자명 :</th>
            <td>
              {CHARGE_GUIDE.depositor}
              <p className="bank-info-box-note">{CHARGE_GUIDE.orgNote}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
