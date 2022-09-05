using Ecommerce_2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace Ecommerce_2.DirtyRead
{
    /// <summary>
    /// Interaction logic for DirtyRead1.xaml
    /// </summary>
    public partial class DirtyRead1 : Window
    {
        public DirtyRead1()
        {
            InitializeComponent();
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            try
            {
                Ecommerce_2Entities db = new Ecommerce_2Entities();
                OrdersTable.ItemsSource = db.Orders.Select(x => x).ToList();
            } catch(Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            
        }
    }
}
