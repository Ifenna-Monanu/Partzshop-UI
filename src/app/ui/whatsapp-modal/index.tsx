import Image from "next/image";
import Modal from "../modal";
import Button from "../button";
import WhatsappConfig from "@/util/whatsapp.config";
import { WhatsappIcon } from "@/app/assets/svg";

export default function WhatsappModal({
  openState,
  closeAction,
}: {
  openState: boolean;
  closeAction: () => void;
}) {
  return (
    <Modal maxWidth={400} show={openState} onClose={closeAction}>
      <Modal.Body>
        <Image src={WhatsappIcon} alt="Whatsapp Icon" width={54} />
        <h2>
          Our sales reps are available 24/7 on WhatsApp to take your order and
          all your car needs.
        </h2>
        <p>Feel free to ask for tips and tricks to keep your car running!</p>
        <Button
          btnType="primary"
          variant="full"
          onClick={() => window.open(WhatsappConfig.link, "_blank")}
        >
          Proceed to Shop
        </Button>
        <Button
          btnType="secondary"
          variant="full"
          onClick={() => closeAction()}
        >
          Go Back
        </Button>
      </Modal.Body>
    </Modal>
  );
}
