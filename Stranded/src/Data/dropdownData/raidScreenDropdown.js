export default raidDropdown = {
  menu: {
    items: [
      {
        label: "Назад",
        key: "0",
      },
    ],
    onClick: () => {
      handleSetScreen(start);
    },
  },
  trigger: ["contextMenu"],
};

const modal = {
  open: isModalOpen,
  footer: null,
  onCancel: () => setIsModalOpen(false),
};
