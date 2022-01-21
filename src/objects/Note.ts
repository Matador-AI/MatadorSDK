export default function (note: any) {
    return {
        id: note.id,
        text: note.text,
        organizationId: note._organization_id,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
    };
}