<template>
    <div class="emoji">
      <ul class="emoji-controller">
        <li 
          v-for="(pannel,index) in pannels" 
          @click="changeActive(index)"
          :class="{'active': index === activeIndex}">{{ pannel }}</li>
      </ul>
      <ul class="emoji-container">
        <li 
          v-for="(emojiGroup, index) in emojis" 
          style="padding: 0" 
          :key="index"
          v-if="index === activeIndex">
          <a 
            href="javascript:;" 
            v-for="(emoji, index) in emojiGroup"  
            :key="index" @click="selectItem(emoji)">
             <span 
                class="emoji-item"
                :title="emoji"
                :class="'sprite-' + getPureName(emoji)"></span>
          </a>
        </li>
      </ul>
    </div>
  </template>
  <script>