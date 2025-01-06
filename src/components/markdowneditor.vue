<!-- MarkdownEditor.vue -->
<template>
  <div class="relative">
    <textarea :value="modelValue" @input="handleInput"
      class="font-mono text-base w-full p-4 border-none outline-none resize-y text-dark-text bg-dark-bg-harder min-h-[12.5rem]"
      :placeholder="placeholder" ref="textarea"></textarea>
    <div class="editor-toolbar flex gap-2 p-2" v-if="showToolbar">
      <button v-for="(tool, index) in toolbar" :key="index" @click.prevent="applyFormat(tool)"
        class="toolbar-button hover:text-gray-400 cursor-pointer border-none text-dark-text bg-none" :title="tool.label">
        <font-awesome-icon :icon="tool.icon" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'MarkdownEditor',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Write something...'
    },
    showToolbar: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const textarea = ref(null)

    const toolbar = [
      {
        label: 'Bold',
        icon: 'fa-solid fa-bold',
        format: (text) => `**${text}**`,
        defaultText: 'bold text'
      },
      {
        label: 'Italic',
        icon: 'fa-italic',
        format: (text) => `*${text}*`,
        defaultText: 'italicized text'
      },
      {
        label: 'Code',
        icon: 'fa-code',
        format: (text) => `\`${text}\``,
        defaultText: 'code'
      },
      {
        label: 'Link',
        icon: 'fa-link',
        format: (text) => `[${text}](url)`,
        defaultText: 'link text'
      },
      {
        label: 'Quote',
        icon: 'fa-quote-left',
        format: (text) => `> ${text}`,
        defaultText: 'quote'
      },
      {
        label: 'Code Block',
        icon: 'fa-file-code',
        format: (text) => `\`\`\`\n${text}\n\`\`\``,
        defaultText: 'code block'
      }
    ]

    const handleInput = (event) => {
      emit('update:modelValue', event.target.value)
    }

    const applyFormat = (tool) => {
      const textArea = textarea.value
      const start = textArea.selectionStart
      const end = textArea.selectionEnd
      const text = props.modelValue

      let selectedText = text.substring(start, end)
      if (!selectedText) selectedText = tool.defaultText

      const beforeText = text.substring(0, start)
      const afterText = text.substring(end)
      const formattedText = tool.format(selectedText)

      const newText = beforeText + formattedText + afterText
      emit('update:modelValue', newText)

      // Set focus back to textarea and select the formatted text
      nextTick(() => {
        textArea.focus()
        const newStart = start
        const newEnd = start + formattedText.length
        textArea.setSelectionRange(newStart, newEnd)
      })
    }

    return {
      textarea,
      toolbar,
      handleInput,
      applyFormat
    }
  }
}
</script>

<style scoped>
.editor-toolbar {
  border-bottom: 1px solid var(--dark-border);
}

.toolbar-button {
  padding: 0.25rem 0.5rem;
  transition: color 0.2s;
}
</style>