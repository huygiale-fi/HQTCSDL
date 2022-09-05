using Ecommerce_2.DirtyRead;
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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Ecommerce_2
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Click_DirtyRead(object sender, RoutedEventArgs e)
        {
            DirtyRead1 scr1 = new DirtyRead1();
            DirtyRead2 scr2 = new DirtyRead2();

            scr1.Show();
            scr2.Show();
        }
    }
}
