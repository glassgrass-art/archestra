
import { ChatOpsProvider, ChatOpsProviderType, ChatReplyOptions, IncomingChatMessage, ChatOpsEventHandler } from "@/types";
import logger from "@/logging";

export class WhatsAppProvider implements ChatOpsProvider {
  readonly providerId: ChatOpsProviderType = "whatsapp";
  readonly displayName = "WhatsApp";

  constructor(private config: any) {}

  isConfigured(): boolean { return Boolean(this.config.enabled && this.config.apiKey); }
  setEventHandler(handler: ChatOpsEventHandler): void {}
  async initialize(): Promise<void> { logger.info("[WhatsAppProvider] Initialized"); }
  async sendReply(options: ChatReplyOptions): Promise<string> {
    logger.info("[WhatsAppProvider] Sending reply via WhatsApp");
    return "whatsapp-msg-id";
  }
  async cleanup(): Promise<void> {}
  async validateWebhookRequest(payload: unknown, headers: Record<string, string | string[] | undefined>): Promise<boolean> { return true; }
  handleValidationChallenge(payload: unknown): unknown | null { return null; }
  async parseWebhookNotification(payload: unknown, headers: Record<string, string | string[] | undefined>): Promise<IncomingChatMessage | null> { return null; }
  async discoverChannels(context: unknown): Promise<any[]> { return []; }
  parseInteractivePayload(payload: unknown): any | null { return null; }
  getWorkspaceId(): string | null { return null; }
  getWorkspaceName(): string | null { return null; }
}

export default WhatsAppProvider;
