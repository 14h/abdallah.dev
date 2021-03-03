import {createClient} from 'contentful'

const client = createClient({
    space: '3d9pj9y7uzhy',
    accessToken: 'zZ_wYuk7a0YplIS3osdETRJgbtWWwqJxWWch-2BmTj8',
    host: 'preview.contentful.com',
});

const parse_post = ({fields}) => ({
    name: fields.name,
    slug: fields.slug,
    images: fields.images,
});

const parsePostEntries = (entries, cb = parse_post) => entries?.items?.map(cb);

export async function get_all_projects() {
    const entries = await client.getEntries({
        content_type: 'project',
    });

    return parsePostEntries(entries, (post) => post.fields)
}

export async function get_project(slug) {
    const entry =  await client.getEntries({
        content_type: 'project',
        limit: 1,
        'fields.slug[in]': slug,
    });

    return entry.items[0].fields;
}
