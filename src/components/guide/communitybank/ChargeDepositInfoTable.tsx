import { COMMUNITY_BANK_GUIDE } from "@/constants/communityBankGuide";

const DEPOSIT_INFO = COMMUNITY_BANK_GUIDE.chargeDepositInfo;

export function ChargeDepositInfoTable({
  tableClassName = "bank-info-table",
}: {
  tableClassName?: string;
}) {
  return (
    <div className="bank-deposit-info" data-guide-id="deposit-info">
      <p className="bank-info-box-title">{DEPOSIT_INFO.title}</p>
      <table className={tableClassName}>
        <tbody>
          <tr>
            <th scope="row">은행명</th>
            <td>{DEPOSIT_INFO.bankName}</td>
          </tr>
          <tr>
            <th scope="row">계좌번호</th>
            <td>{DEPOSIT_INFO.accountNumber}</td>
          </tr>
          <tr>
            <th scope="row">예금주</th>
            <td>{DEPOSIT_INFO.accountHolder}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
