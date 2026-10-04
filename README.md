# Cypress Automation Test

## Menjalankan Automation Test

### 1. Install dependency

Pastikan Node.js dan npm sudah ter-install, lalu jalankan:

```bash
npm install
```

### 2. Menjalankan Cypress dalam mode interaktif

```bash
npx cypress open
```

Pilih **E2E Testing**, pilih browser, lalu pilih file spec yang ingin dijalankan.

### 3. Menjalankan seluruh test secara headless

```bash
npx cypress run --e2e
```

### 4. Menjalankan satu file test

Contoh:

```bash
npx cypress run --spec "cypress/e2e/droppable.spec.cy.js"
```

Contoh file test yang tersedia:

- `cypress/e2e/webtables.spec.cy.js`
- `cypress/e2e/droppable.spec.cy.js`
- `cypress/e2e/resizable.spec.cy.js`

### 5. Menjalankan semua test dalam folder E2E

```bash
npx cypress run --spec "cypress/e2e"
```
