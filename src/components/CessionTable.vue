<template>
  <table>
    <thead>
      <tr>
        <th>test</th>
        <th>test</th>
        <th>test</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>123dsfsd</td>
        <td>dfgsd</td>
        <td>123</td>
      </tr>
      <tr>
        <td>123dsfsd</td>
        <td>dfgsd</td>
        <td>123</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup></script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  th {
    text-align: left;
  }
  th,
  td {
    border-top: 3px solid var(--c-background);
    padding: 5px 10px;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  thead {
    background: #fff;
    height: 40px;
  }
  tbody {
    margin-top: 10px;
    &::before {
      line-height: 5px;
      content: '.';
      color: white; /* bacground color */
      display: block;
    }

    tr {
      background: #fff;
      border-radius: 20px;
      height: 48px;
    }
  }
}
</style>
