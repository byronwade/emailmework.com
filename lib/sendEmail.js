import { Resend } from "resend";
import Welcome from "@/components/emails/Welcome";
import PasswordReset from "@/components/emails/PasswordReset";
import AccountActivation from "@/components/emails/AccountActivation";
import NewJobNotification from "@/components/emails/NewJobNotification";
import JobCompletion from "@/components/emails/JobCompletion";
import NewMessageNotification from "@/components/emails/NewMessageNotification";
import AccountDeactivationWarning from "@/components/emails/AccountDeactivationWarning";
import SubscriptionRenewalReminder from "@/components/emails/SubscriptionRenewalReminder";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailTemplates = {
	welcome: Welcome,
	passwordReset: PasswordReset,
	accountActivation: AccountActivation,
	newJobNotification: NewJobNotification,
	jobCompletion: JobCompletion,
	newMessageNotification: NewMessageNotification,
	accountDeactivationWarning: AccountDeactivationWarning,
	subscriptionRenewalReminder: SubscriptionRenewalReminder,
};

export const sendEmail = async (emailType, props) => {
	const EmailComponent = emailTemplates[emailType];

	if (!EmailComponent) {
		throw new Error(`Email template for type "${emailType}" not found`);
	}

	const emailProps = {
		from: "EmailMeWork <noreply@emailmework.com>",
		to: [props.to],
		subject: props.subject,
		react: <EmailComponent {...props} />,
	};

	const { data, error } = await resend.emails.send(emailProps);

	if (error) {
		throw new Error(error);
	}

	return data;
};
