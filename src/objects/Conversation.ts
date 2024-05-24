export default function (conversation: Conversation) {
    return {
        id: conversation.conversation._id,
        locationId: conversation.conversation._location_id,
        organizationId: conversation.conversation._organization_id,
        initiatorId: conversation.conversation.initiator_contact._id,
        receiverId: conversation.conversation.receiver_contact._id,
        createdAt: conversation.conversation.createdAt,
        updatedAt: conversation.conversation.updatedAt,
    };
}

interface Conversation {
    conversation: {
        initiator_contact: Record<string, unknown>;
        receiver_contact: Record<string, unknown>;
        receiver: Record<string, unknown>;
        crmInfo: Record<string, unknown>;
        AIBotInfo: Record<string, unknown>;
        fb_messenger: Record<string, unknown>;
        kind: string;
        unsubscribed: boolean;
        source: string[];
        last_source: string;
        chat_source_type: string;
        _lead_forms: string[];
        users: string[];
        is_archived: boolean;
        is_unread: boolean;
        messages: Record<string, unknown>[];
        is_replied_back: boolean;
        is_broadcast: boolean;
        is_notified: boolean;
        unassigned: boolean;
        users_who_archived_exists: boolean;
        isSuperhumanAction: boolean;
        crmSource: string;
        website: string;
        last_sequence_id: string;
        last_autoreply_message_id: string;
        lastMessageReceivedFrom: string;
        lastGoogleMessageId: string | null;
        smart_nudge_enabled: boolean;
        preferred_nudge_time: string | null;
        intents: string[];
        sequence_type: string | null;
        conversation_timeline_steps: Record<string, unknown>[];
        received_new_lead: boolean;
        _id: string;
        initiator_phone: string;
        receiver_phone: string;
        _organization_id: string;
        initiator_name: string;
        _initiator_id: string;
        _receiver_id: string;
        _location_id: string;
        lastMessageCreatedAt: string;
        createdAt: string;
        updatedAt: string;
        _token: string;
        sources_names: string[];
    }
}