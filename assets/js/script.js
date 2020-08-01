const datePicker = $("#car_datepicker").multiDatesPicker({
  numberOfMonths: 3,
  altField: "#input_dates",
  onSelect: function (dateText, inst) {
    console.log("Date: ", dateText);
    console.log("Instance: ", inst.input.val());
    console.log("This: ", this);
  },
});
$("#check_button").click(function () {
  const sel_dates = $("#input_dates").val(); // datePicker.val()
  let parsedDates = [];
  if (sel_dates) {
    parsedDates = sel_dates.split(", ");
  }
  console.log(sel_dates);
});
