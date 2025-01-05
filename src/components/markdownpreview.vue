<!-- MarkdownPreview.vue -->
<template>
    <div class="markdown-preview overflow-y-scroll max-h-64 h-full w-full max-w-full prose prose-toy-story" v-html="renderedContent"></div>
</template>

<script>
import { computed } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

// Configure marked options
marked.setOptions({
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(code, { language: lang }).value
            } catch (__) { }
        }
        return code // Use generic if language not found
    },
    breaks: true,
    gfm: true,
    sanitize: true,
    smartLists: true,
    smartypants: true
})

// Custom renderer to add classes and attributes
const renderer = new marked.Renderer()

// Customize link rendering
renderer.link = (href, title, text) => {
    return `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener noreferrer">${text}</a>`
}

// Customize image rendering
renderer.image = (href, title, text) => {
    return `<img src="${href}" alt="${text}" title="${title || ''}" class="markdown-img" />`
}

marked.setOptions({ renderer })

export default {
    name: 'MarkdownPreview',
    props: {
        content: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const renderedContent = computed(() => {
            try {
                return marked(props.content || '')
            } catch (error) {
                console.error('Markdown parsing error:', error)
                return '<p class="text-dark-red">Error rendering markdown content</p>'
            }
        })
        return {
            renderedContent
        }
    }
}
</script>

<style>
/* .markdown-preview {
    color: var(--dark-text);
    line-height: 1.6;
}

.markdown-preview h1,
.markdown-preview h2,
.markdown-preview h3,
.markdown-preview h4,
.markdown-preview h5,
.markdown-preview h6 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: 600;
}

.markdown-preview h1 {
    font-size: 2em;
}

.markdown-preview h2 {
    font-size: 1.5em;
}

.markdown-preview h3 {
    font-size: 1.25em;
}

.markdown-preview p {
    margin: 1em 0;
}

.markdown-preview code {
    padding: 0.2em 0.4em;
    background-color: var(--dark-bg-harder);
    border-radius: 3px;
    font-family: monospace;
}

.markdown-preview pre {
    padding: 1em;
    overflow-x: auto;
    background-color: var(--dark-bg-harder);
    border-radius: 4px;
}

.markdown-preview pre code {
    padding: 0;
    background-color: transparent;
}

.markdown-preview blockquote {
    margin: 1em 0;
    padding-left: 1em;
    left: 4px solid var(--dark-border);
    color: var(--dark-text-soft);
}

.markdown-preview ul,
.markdown-preview ol {
    margin: 1em 0;
    padding-left: 2em;
}

.markdown-preview li {
    margin: 0.5em 0;
}

.markdown-preview img {
    max-width: 100%;
    height: auto;
}

.markdown-preview a {
    color: var(--dark-acc-soft);
    text-decoration: none;
}

.markdown-preview a:hover {
    text-decoration: underline;
}

.markdown-preview table {
    width: 100%;
    margin: 1em 0;
    border-collapse: collapse;
}

.markdown-preview th,
.markdown-preview td {
    padding: 0.5em;
    border: 1px solid var(--dark-border);
}

.markdown-preview th {
    background-color: var(--dark-bg-harder);
} */
</style>