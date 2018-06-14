<template>
  <section class="id-doc-main">
    <id-sidebar :activeIndex="$route.path">
      <id-sidebar-group title="Group One">
        <id-sidebar-item icon="activity" to="/docs/">
          item one
        </id-sidebar-item>
        <id-sidebar-item icon="airplay" to="/docs/icon">
          item two
        </id-sidebar-item>
      </id-sidebar-group>
      <id-sidebar-group title="Group Two">
        <id-sidebar-item icon="award" to="/docs/button">
          item one
        </id-sidebar-item>
        <id-sidebar-item icon="bell" to="/docs/sidebar">
          item two
        </id-sidebar-item>
      </id-sidebar-group>
    </id-sidebar>
  </section>
</template>
