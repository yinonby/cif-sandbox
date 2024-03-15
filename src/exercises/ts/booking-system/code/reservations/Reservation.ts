import Payable from "../payments/Payable";

export default abstract class Reservation implements Payable {
  private paymentId: string = "";

  constructor(
    private readonly reservationId: string,
    private readonly customerEmail: string) {
  }

  public getReservationId(): string {
    return this.reservationId;
  }

  public getcustomerEmail(): string {
    return this.customerEmail;
  }

  public getPaymentId(): string {
    return this.paymentId;
  }

  public setPaymentId(paymentId: string): void {
    this.paymentId = paymentId;
  }

  public abstract getRate(): number;
  public abstract getCurrencyCode(): string;
  public abstract getReservationSummary(): string;
}
