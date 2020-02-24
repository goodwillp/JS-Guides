const hbs = require('hbs')

var template1 = `{{#each rootT}}  
                    {{topic}}
                    {{#each chapterT}}
                        {{chapter}}
                        {{#each subjectT}}
                            {{subject}}
                            {{#each titleT}}
                                {{title}}, {{uuid}}
                            {{/each}}
                        {{/each}}
                    {{/each}}
                {{/each}}`;

 var render = hbs.compile(template1);
                
                var snippets = {
                    "rootT": 
                    {
                        "0": 
                        {
                            "topic":"topic1",
                            "chapterT": 
                            {
                                "0": { 
                                        "chapter":"chapter1",
                                        "subjectT": 
                                        {
                                            "0": 
                                            {
                                                "subject": "subject1",
                                                "titleT": 
                                                { 
                                                    "0": 
                                                    {
                                                        "title": "title1",
                                                        "uuid": "1"
                                                    },
                                                    "1": 
                                                    {
                                                        "title": "title2",
                                                        "uuid": "2"
                                                    },
                                                    "2": 
                                                    {
                                                        "title": "title3",
                                                        "uuid": "3"
                                                    },

                                                },
                                            },
                                            "1": {"subject": "subject2"},
                                            "2": {"subject": "subject3"}
                                        }
                                    },
                                "1": { "chapter": "chapter2" },
                                "2": { "chapter": "chapter3" },
                            },
                        },
                        "1": 
                        { 
                            "topic": "topic2",
                            "chapterT": 
                            {
                                "0": { "chapter": "chapter4" },
                            },
                        },
                        "2": 
                        { 
                            "topic": "topic3",
                            "chapterT": 
                            {
                                "0": { "chapter": "chapter5" },
                            },
                        },
                    }
                }

 console.log(render(snippets));