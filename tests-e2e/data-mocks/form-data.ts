export default {
  story: {
    name: 'Kontakta oss',
    created_at: '2023-10-25T07:51:35.530Z',
    published_at: '2023-12-19T14:23:14.957Z',
    id: 394660758,
    uuid: '2fee9871-de4d-4851-80be-14a057db6a00',
    content: {
      _uid: '81b6697b-575c-4999-b106-2f5c04ef68aa',
      body: [
        {
          _uid: '109c86b7-2a97-4779-bfc3-c0dd7f1d5ee2',
          image: {
            id: null,
            alt: null,
            name: '',
            focus: null,
            title: null,
            source: null,
            filename: '',
            copyright: null,
            fieldtype: 'asset',
            meta_data: {},
          },
          bodyText: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    text: 'Enklast sättet är att skicka ett mejl till ',
                    type: 'text',
                    marks: [{ type: 'textStyle', attrs: { color: '' } }],
                  },
                  {
                    text: 'info@amaceit.se',
                    type: 'text',
                    marks: [
                      {
                        type: 'link',
                        attrs: {
                          href: 'mailto:info@amaceit.se',
                          uuid: null,
                          anchor: null,
                          target: null,
                          linktype: 'url',
                        },
                      },
                      { type: 'bold' },
                      { type: 'textStyle', attrs: { color: '' } },
                    ],
                  },
                  {
                    text: ', ringa oss på telefon ',
                    type: 'text',
                    marks: [{ type: 'textStyle', attrs: { color: '' } }],
                  },
                  {
                    text: '070-XX XX XX',
                    type: 'text',
                    marks: [
                      { type: 'bold' },
                      { type: 'textStyle', attrs: { color: '' } },
                    ],
                  },
                  {
                    text: ' eller använda kontaktformuläret',
                    type: 'text',
                    marks: [{ type: 'textStyle', attrs: { color: '' } }],
                  },
                ],
              },
            ],
          },
          headLine: {
            type: 'doc',
            content: [
              {
                type: 'paragraph',
                content: [
                  { text: 'Vi vill gärna ha kontakt med er.', type: 'text' },
                ],
              },
            ],
          },
          component: 'hero',
          ctaPrimary: [
            {
              _uid: 'bd9551db-240e-4e22-9d43-c5b251d699be',
              link: {
                id: '',
                url: '#offices',
                linktype: 'url',
                fieldtype: 'multilink',
                cached_url: '#offices',
              },
              text: 'Hitta till av våra kontor',
              component: 'Link',
              _editable:
                '\u003c!--#storyblok#{"name": "Link", "space": "255438", "uid": "bd9551db-240e-4e22-9d43-c5b251d699be", "id": "394660758"}--\u003e',
            },
          ],
          ctaSecondary: [
            {
              _uid: 'bba6636b-0939-4e0d-bd81-7bf7d9452957',
              link: {
                id: '',
                url: 'https://linkedin.com/amaceit',
                linktype: 'url',
                fieldtype: 'multilink',
                cached_url: 'https://linkedin.com/amaceit',
              },
              text: 'Följ oss på Linked in',
              component: 'Link',
              _editable:
                '\u003c!--#storyblok#{"name": "Link", "space": "255438", "uid": "bba6636b-0939-4e0d-bd81-7bf7d9452957", "id": "394660758"}--\u003e',
            },
          ],
          _editable:
            '\u003c!--#storyblok#{"name": "hero", "space": "255438", "uid": "109c86b7-2a97-4779-bfc3-c0dd7f1d5ee2", "id": "394660758"}--\u003e',
        },
        {
          _uid: '569359b1-41f4-468d-aa4c-40c33720d26f',
          Inputs: [
            {
              Name: 'Name',
              Type: 'text',
              _uid: '3502f6da-f6d5-4975-9ccb-a5c75cc8e3b1',
              Label: 'Name',
              component: 'Form Inputs',
              Validators: [
                {
                  _uid: 'f4d08f59-907d-4199-94be-45e01c129998',
                  component: 'Maximum Length',
                  maxLength: '10',
                  errorMessage: 'För långt namn',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Maximum Length", "space": "255438", "uid": "f4d08f59-907d-4199-94be-45e01c129998", "id": "394660758"}--\u003e',
                },
              ],
              Placeholder: 'Name',
              _editable:
                '\u003c!--#storyblok#{"name": "Form Inputs", "space": "255438", "uid": "3502f6da-f6d5-4975-9ccb-a5c75cc8e3b1", "id": "394660758"}--\u003e',
            },
            {
              Name: 'Email',
              Type: 'email',
              _uid: 'eb4633fa-3196-43d7-aae5-29687349b060',
              Label: 'E-mail',
              component: 'Form Inputs',
              Validators: [
                {
                  _uid: '72bc3d3b-c8be-4ebd-9ee4-b528eba3a8c3',
                  component: 'Required',
                  errorMessage: 'Glöm inte att skriva in din mail',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Required", "space": "255438", "uid": "72bc3d3b-c8be-4ebd-9ee4-b528eba3a8c3", "id": "394660758"}--\u003e',
                },
                {
                  _uid: 'f16faa0a-30d1-41be-98ee-7c4486722938',
                  component: 'Email',
                  errorMessage: 'Glöm inte att skriva din mail i rätt format',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Email", "space": "255438", "uid": "f16faa0a-30d1-41be-98ee-7c4486722938", "id": "394660758"}--\u003e',
                },
                {
                  _uid: 'dfa8277d-acc8-4c97-b343-bfaa6536ecbe',
                  component: 'Minimum Length',
                  minLength: '2',
                  errorMessage: 'för kort meddelande',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Minimum Length", "space": "255438", "uid": "dfa8277d-acc8-4c97-b343-bfaa6536ecbe", "id": "394660758"}--\u003e',
                },
              ],
              Placeholder: 'Email',
              _editable:
                '\u003c!--#storyblok#{"name": "Form Inputs", "space": "255438", "uid": "eb4633fa-3196-43d7-aae5-29687349b060", "id": "394660758"}--\u003e',
            },
            {
              Name: 'Text',
              Type: 'textArea',
              _uid: 'bae18945-207e-40c5-8f20-e24643b7ff4f',
              Label: 'Meddelande',
              component: 'Form Inputs',
              Validators: [
                {
                  _uid: 'ec5d4f92-02a7-4d29-ae2c-5ad2e1de8e29',
                  component: 'Maximum Length',
                  maxLength: '200',
                  errorMessage: 'För långt meddelande',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Maximum Length", "space": "255438", "uid": "ec5d4f92-02a7-4d29-ae2c-5ad2e1de8e29", "id": "394660758"}--\u003e',
                },
                {
                  _uid: 'dfa8277d-acc8-4c97-b343-bfaa6536ecbe',
                  component: 'Minimum Length',
                  minLength: '2',
                  errorMessage: 'för kort meddelande',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Minimum Length", "space": "255438", "uid": "dfa8277d-acc8-4c97-b343-bfaa6536ecbe", "id": "394660758"}--\u003e',
                },
                {
                  _uid: '15e32eb2-4271-4b18-9ac5-b0e368b8851e',
                  component: 'Required',
                  errorMessage: 'Ska du inte skriva något?',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Required", "space": "255438", "uid": "15e32eb2-4271-4b18-9ac5-b0e368b8851e", "id": "394660758"}--\u003e',
                },
              ],
              Placeholder: 'Meddelande',
              _editable:
                '\u003c!--#storyblok#{"name": "Form Inputs", "space": "255438", "uid": "bae18945-207e-40c5-8f20-e24643b7ff4f", "id": "394660758"}--\u003e',
            },
            {
              Name: 'test_non_mandatory',
              Type: 'text',
              _uid: 'fdeffe46-3e8d-43fc-a581-6cb32d3eae6f',
              Label: 'Frivilligt',
              component: 'Form Inputs',
              Validators: [
                {
                  _uid: 'd013e167-c11c-4ceb-879d-4b856bab1635',
                  component: 'Minimum Length',
                  minLength: '2',
                  errorMessage: 'För kort',
                  _editable:
                    '\u003c!--#storyblok#{"name": "Minimum Length", "space": "255438", "uid": "d013e167-c11c-4ceb-879d-4b856bab1635", "id": "394660758"}--\u003e',
                },
              ],
              Placeholder: 'Meh....',
              _editable:
                '\u003c!--#storyblok#{"name": "Form Inputs", "space": "255438", "uid": "fdeffe46-3e8d-43fc-a581-6cb32d3eae6f", "id": "394660758"}--\u003e',
            },
          ],
          Endpoint: 'http://localhost:3010/kontakta-oss',
          component: 'Form',
          _editable:
            '\u003c!--#storyblok#{"name": "Form", "space": "255438", "uid": "569359b1-41f4-468d-aa4c-40c33720d26f", "id": "394660758"}--\u003e',
        },
        {
          _uid: '8d3d499d-7ba0-44d8-b954-ba2eea108fec',
          theme: 'default',
          title: '',
          columns: [
            {
              zip: '341 31',
              _uid: '9b2cbfbc-3682-421e-a6a3-005d9f67c3a8',
              city: 'Ljungby',
              zoom: '17z',
              latitude: '13.9222735',
              component: 'offices',
              longitude: '56.8278438',
              streetadress: 'Kånnavägen 40',
              _editable:
                '\u003c!--#storyblok#{"name": "offices", "space": "255438", "uid": "9b2cbfbc-3682-421e-a6a3-005d9f67c3a8", "id": "394660758"}--\u003e',
            },
            {
              zip: '582 25',
              _uid: '22227ce7-9bdc-4abe-aa85-260aefe925c5',
              city: 'Linköping',
              zoom: '17z',
              latitude: '15.624062',
              component: 'offices',
              longitude: '58.4091887',
              streetadress: 'Drottninggatan 19',
              _editable:
                '\u003c!--#storyblok#{"name": "offices", "space": "255438", "uid": "22227ce7-9bdc-4abe-aa85-260aefe925c5", "id": "394660758"}--\u003e',
            },
            {
              zip: '111 37',
              _uid: '1dd6e892-a6ab-4a90-a67c-5b13dc32ad85',
              city: 'Stockholm',
              zoom: '17z',
              latitude: '18.06042459776755',
              component: 'offices',
              longitude: '59.33583693580277',
              streetadress: 'Olof Palmes Gata 13',
              _editable:
                '\u003c!--#storyblok#{"name": "offices", "space": "255438", "uid": "1dd6e892-a6ab-4a90-a67c-5b13dc32ad85", "id": "394660758"}--\u003e',
            },
            {
              zip: '417 55',
              _uid: '1dd6e892-a6ab-4a90-a67c-5b13dc32ad85',
              city: 'Göteborg',
              zoom: '17z',
              latitude: '11.947166564108716',
              component: 'offices',
              longitude: '57.71176377113668',
              streetadress: 'Pumpgatan 1',
              _editable:
                '\u003c!--#storyblok#{"name": "offices", "space": "255438", "uid": "1dd6e892-a6ab-4a90-a67c-5b13dc32ad85", "id": "394660758"}--\u003e',
            },
          ],
          component: 'grid',
          _editable:
            '\u003c!--#storyblok#{"name": "grid", "space": "255438", "uid": "8d3d499d-7ba0-44d8-b954-ba2eea108fec", "id": "394660758"}--\u003e',
        },
      ],
      component: 'template_default',
      _editable:
        '\u003c!--#storyblok#{"name": "template_default", "space": "255438", "uid": "81b6697b-575c-4999-b106-2f5c04ef68aa", "id": "394660758"}--\u003e',
    },
    slug: 'kontakta-oss',
    full_slug: 'kontakta-oss',
    sort_by_date: null,
    position: -70,
    tag_list: [],
    is_startpage: false,
    parent_id: null,
    meta_data: null,
    group_id: '33aef07f-8c30-40ec-8888-71904d6d53b8',
    first_published_at: '2023-10-25T07:51:48.088Z',
    release_id: null,
    lang: 'default',
    path: null,
    alternates: [],
    default_full_slug: null,
    translated_slugs: null,
  },
  cv: 1703013496,
  rels: [],
  links: [],
};
