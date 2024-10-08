import { PolicyTemplate } from "vrotsc-annotations";

@PolicyTemplate({
	name: "Policy Template Schedule",
	path: "MyOrg/MyProject",
	templateVersion: "v2",
	elements: {
		Schedule: {
			type: "Periodic Event",
			events: {
				OnExecute: "onExecute"
			},
			schedule: {
				periode: "every-days",
				when: "11:12:00,12:00:00",
				timezone: "Europe/Sofia"
			}
		}
	}
})
export class PolicyTemplateAmqp {
	onExecute(self: AMQPSubscription, event: any) {
		System.log("onMessage");
	}
}
